/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken')
const knex = require('../connection')
require('dotenv').config()

const verifySignIn = async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(400).json('Token não informado')
  }

  try {
    const token = authorization.replace('Bearer', '').trim()

    const { id } = jwt.verify(token, process.env.JWT_SECRET)

    const verifyQuery = await knex('users').where('id', id)

    if (verifyQuery.length === 0) {
      return res.status(404).json('Usuário não encontrado')
    }

    const { password, ...user } = verifyQuery[0]

    req.user = user

    next()
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

module.exports = verifySignIn
