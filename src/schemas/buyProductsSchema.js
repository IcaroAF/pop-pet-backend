const yup = require('../validations/settings')

const buyProductsSchema = yup.object().shape({
  id: yup.number().required(),
  amount: yup.number().required()
})

module.exports = buyProductsSchema
