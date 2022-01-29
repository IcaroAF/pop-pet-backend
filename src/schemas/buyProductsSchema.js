const yup = require('../validations/settings')

const buyProductsSchema = yup.object().shape({
  id: yup.integer().required(),
  amount: yup.integer().required()
})

module.exports = buyProductsSchema
