const yup = require('../validations/settings')

const signInSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required()
})

module.exports = signInSchema
