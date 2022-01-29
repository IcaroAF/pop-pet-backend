const express = require('express')
const products = require('../controllers/products')

const routes = express()

routes.get('/products', products.listAllProducts)
routes.post('/products', products.buyProducts)

module.exports = routes
