const knex = require('../connection')
const buyProductsSchema = require('../schemas/buyProductsSchema')

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
  // const { id, quantidade } = req.body

  try {
    // eslint-disable-next-line no-restricted-syntax
    for (const product of req.body) {
      const { id, quantidade } = product

      // eslint-disable-next-line no-await-in-loop
      await buyProductsSchema.validate(product)
      // eslint-disable-next-line no-await-in-loop
      await knex('products')
        .where(product.id, id)
        .decrement('amount', quantidade)
      // eslint-disable-next-line no-console
      console.log('removi')
    }
    return res.status(200).json('reduzido com sucesso')
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

module.exports = {
  listAllProducts,
  buyProducts
}
