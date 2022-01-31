/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const knex = require('../connection')
const buyProductsSchema = require('../schemas/buyProductsSchema')
const addProductSchema = require('../schemas/addProductSchema')

const listAllProducts = async (req, res) => {
  try {
    const query = knex('products')
    const getAllProducts = await query

    return res.status(200).json(getAllProducts)
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

const buyProducts = async (req, res) => {
  try {
    let sold = 0
    let valueSold = 0
    for (const product of req.body) {
      const { id, amount } = product
      await buyProductsSchema.validate(product)
      const productValue = await knex('products')
        .select('price')
        .where('id', id)
      await knex('products').where('id', id).decrement('amount', amount)
      sold += product.amount
      valueSold += productValue[0].price * amount
    }
    await knex('sales').insert({ items_sold: sold, value: valueSold })
    return res.status(200).json('Compra efetuada!')
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

const createProduct = async (req, res) => {
  const { name, price, description, category, amount, img } = req.body

  try {
    await addProductSchema.validate(req.body)

    const checkSameProduct = await knex('products').where('name', name)

    if (checkSameProduct[0]) {
      return res
        .status(400)
        .json('Já existe um produto cadastrado com esse nome')
    }

    const productObject = {
      name,
      price,
      description,
      category,
      amount,
      img
    }

    const query = await knex('products').insert(productObject)

    if (query.rowCount === 0) {
      return res.status(400).json('Não foi possível adicionar o produto')
    }

    return res.status(200).json('Produto adicionado com sucesso')
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

module.exports = {
  listAllProducts,
  buyProducts,
  createProduct
}
