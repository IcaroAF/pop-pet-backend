/* eslint-disable camelcase */
const bcrypt = require('bcrypt')
const knex = require('../connection')
const signUpUserSchema = require('../schemas/signUpUserSchema')

const signUp = async (req, res) => {
  const {
    name,
    email,
    password,
    cpf,
    zipcode,
    street,
    home_num,
    city,
    state,
    ref_address,
    phone_1,
    phone_2,
    role
  } = req.body

  try {
    await signUpUserSchema.validate(req.body)
    const checkEmailQuery = await knex('users').where('email', email)
    const duplicateCPF = await knex('users').where('cpf', cpf)

    if (checkEmailQuery[0]) {
      return res.status(400).json('O e-mail informado já está cadastrado.')
    }

    if (duplicateCPF[0]) {
      return res
        .status(400)
        .json('Já existe um usuário com este CPF cadastrado')
    }

    const encryptedPassword = await bcrypt.hash(password, 10)

    const userObject = {
      name,
      email,
      password: encryptedPassword,
      cpf,
      zipcode,
      home_num,
      street,
      city,
      state,
      ref_address,
      phone_1,
      phone_2,
      role
    }

    const query = await knex('users').insert(userObject)

    if (query.rowCount === 0) {
      return res.status(400).json('Não foi possível cadastrar o cliente.')
    }

    return res.status(200).json('Usuário cadastrado com sucesso')
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

module.exports = {
  signUp
}
