const express = require('express')
const products = require('../controllers/products')
const users = require('../controllers/users')
const login = require('../controllers/login')
const signInVerifier = require('../middlewares/signInVerifier')

const routes = express()

routes.get('/products', products.listAllProducts)
routes.post('/products', products.buyProducts)
routes.post('/users', users.signUp)
routes.post('/login', login.signIn)
routes.use(signInVerifier)

module.exports = routes
