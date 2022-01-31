const knex = require('../connection')

const getResume = async (req, res) => {
  try {
    const getAdminResume = await knex
      .select(
        knex
          .select(knex.raw('COUNT(users.id)'))
          .as('total_users')
          .from('users'),
        knex
          .select(knex.raw('COUNT(products.id)'))
          .as('total_products')
          .from('products'),
        knex
          .select(knex.raw('SUM(sales.items_sold)'))
          .as('total_items_sold')
          .from('sales'),
        knex
          .select(knex.raw('SUM(sales.value)'))
          .as('total_value')
          .from('sales')
      )
      .debug()

    return res.status(200).json(getAdminResume)
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

module.exports = { getResume }
