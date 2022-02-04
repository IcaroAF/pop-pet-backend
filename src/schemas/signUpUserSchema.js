const yup = require('../validations/settings')

const signUpUserSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
  cpf: yup.string().required(),
  zipcode: yup.string().required(),
  home_num: yup.string().required(),
  ref_address: yup.string(),
  phone: yup.string().required(),
  is_admin: yup.string()
})

module.exports = signUpUserSchema
