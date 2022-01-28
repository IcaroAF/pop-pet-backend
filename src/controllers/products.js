const knex = require('../connection')

const listAllProducts = async (req, res) => {
  try {
    const query = knex('products')
    const getAllProducts = await query

    return res.status(200).json(getAllProducts)
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

module.exports = {
  listAllProducts
}
