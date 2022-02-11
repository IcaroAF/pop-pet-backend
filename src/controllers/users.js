/* eslint-disable camelcase */
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const knex = require('../connection')
const signUpUserSchema = require('../schemas/signUpUserSchema')
const editUserSchema = require('../schemas/editUserSchema')

const signUp = async (req, res) => {
  const {
    name,
    username,
    email,
    password,
    cpf,
    zipcode,
    street,
    home_num,
    city,
    state,
    ref_address,
    phone,
    is_admin
  } = req.body

  try {
    await signUpUserSchema.validate(req.body)
    const checkEmailQuery = await knex('users').where('email', email)
    const duplicateCPF = await knex('users').where('cpf', cpf)
    const duplicateUser = await knex('users').where('username', username)

    if (checkEmailQuery[0]) {
      return res.status(400).json('O e-mail informado já está cadastrado.')
    }

    if (duplicateUser[0]) {
      return res.status(400).json('Este nome de usuário está indisponível.')
    }

    if (duplicateCPF[0]) {
      return res
        .status(400)
        .json('Já existe um usuário com este CPF cadastrado')
    }

    const encryptedPassword = await bcrypt.hash(password, 10)

    const userObject = {
      name,
      username,
      email,
      password: encryptedPassword,
      cpf,
      zipcode,
      home_num,
      street,
      city,
      state,
      ref_address,
      phone,
      is_admin
    }

    const user = userObject
    const { password: userPassword, ...userData } = user
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '8h'
    })

    const query = await knex('users').insert(userObject)

    if (query.rowCount === 0) {
      return res.status(400).json('Não foi possível cadastrar o cliente.')
    }

    return res.status(200).json({
      message: 'Usuário cadastrado com sucesso.',
      userLogged: userData,
      token
    })
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

const editUser = async (req, res) => {
  const {
    name,
    email,
    cpf,
    zipcode,
    street,
    home_num,
    city,
    state,
    ref_address,
    phone
  } = req.body

  try {
    await editUserSchema.validate(req.body)
    const { user } = req

    if (email) {
      const checkNewEmail = await knex('users')
        .where('email', email)
        .whereNot('id', user.id)

      if (checkNewEmail.length > 0) {
        return res.status(400).json('O e-mail informado já está cadastrado')
      }
    }

    if (cpf) {
      const checkNewCPF = await knex('users')
        .where('cpf', cpf)
        .whereNot('id', user.id)

      if (checkNewCPF.length > 0) {
        return res.status(400).json('O CPF informado já está cadastrado')
      }
    }

    const updateUserProfile = await knex('users')
      .update({
        name,
        email,
        cpf,
        zipcode,
        street,
        home_num,
        city,
        state,
        ref_address,
        phone
      })
      .where('id', user.id)

    if (updateUserProfile !== 1) {
      return res
        .status(400)
        .json('Não foi possível atualizar o cadastro do usuário.')
    }

    return res.status(200).json('Usuário atualizado com sucesso.')
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

module.exports = {
  editUser,
  signUp
}
