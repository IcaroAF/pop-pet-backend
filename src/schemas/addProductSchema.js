const yup = require('../validations/settings')

const addProductSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.string().required(),
  description: yup.string().required(),
  category: yup.string().required(),
  amount: yup.number().required(),
  img: yup.string().required()
})

module.exports = addProductSchema
