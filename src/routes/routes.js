const express = require('express')

const routes = express()

routes.post('/products', async (req, res) => {
  const { name, price } = req.body
  try {
    return res.status(200).json(name, price)
  } catch (error) {
    return res.status(400).json(error.message)
  }
})

module.exports = routes
