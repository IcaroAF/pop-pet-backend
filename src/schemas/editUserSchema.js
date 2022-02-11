const yup = require('../validations/settings')

const editUserSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email(),
  cpf: yup.string(),
  zipcode: yup.string(),
  home_num: yup.string(),
  ref_address: yup.string(),
  phone: yup.string()
})

module.exports = editUserSchema
