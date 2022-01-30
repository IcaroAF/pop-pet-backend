const yup = require('../validations/settings')

const signUpUserSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
  cpf: yup.string().required(),
  zipcode: yup.string().required(),
  home_num: yup.string().required(),
  ref_address: yup.string(),
  phone_1: yup.string().required(),
  phone_2: yup.string().required(),
  role: yup.string()
})

module.exports = signUpUserSchema
