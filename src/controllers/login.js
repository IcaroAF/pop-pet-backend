const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const knex = require('../connection')
const signInUserSchemata = require('../schemas/signInSchema')
require('dotenv').config()

const signIn = async (req, res) => {
  const { username, password } = req.body

  try {
    await signInUserSchemata.validate(req.body)

    const userSignIn = await knex('users').where('username', username)

    if (userSignIn.length === 0) {
      return res.status(400).json('O usuário não foi encontrado')
    }

    const user = userSignIn[0]

    const correctPassword = await bcrypt.compare(password, user.password)

    if (!correctPassword) {
      return res.status(400).json('Usuário e senha não conferem')
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '8h'
    })

    const { password: userPassword, ...userData } = user

    return res.status(200).json({
      userLogged: userData,
      token
    })
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

module.exports = { signIn }
