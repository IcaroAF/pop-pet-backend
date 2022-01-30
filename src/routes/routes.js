const express = require('express')
const products = require('../controllers/products')
const users = require('../controllers/users')
const login = require('../controllers/login')

const routes = express()

routes.get('/products', products.listAllProducts)
routes.post('/products', products.buyProducts)
routes.post('/users', users.signUp)
routes.post('/login', login.signIn)

module.exports = routes
