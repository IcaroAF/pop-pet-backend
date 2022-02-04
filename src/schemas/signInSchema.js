const yup = require('../validations/settings')

const signInSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required()
})

module.exports = signInSchema
