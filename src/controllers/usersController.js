const {
  User
} = require('../db')

const getAll = async ()=>{
  return await {message:'aqui van los usrs'}
}

const create = async ()=>{
  try {
    await User.findOne({
      where: {
        email: {
          [Op.eq]: data.email,
        },
      },
    })
    return 'Usuario registrado con exito!.'
  } catch (error) {
    return 'Error al registrar el usuario!!!'
  }
}

module.exports = {
  getAll,
}