const express = require('express')
const products = require('../controllers/products')

const routes = express()

routes.get('/products', products.listAllProducts)

module.exports = routes
