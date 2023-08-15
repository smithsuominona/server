const { use } = require('chai');
const { getAll } = require('../controllers/usersController')
const {User} = require('../db')

const getUsersHandler = async (req,res)=>{
  try {
    //consulto db pokemon
    const userDb = await User.findAll();

    if(!userDb) throw Error('Aun no se han creado Usuarios!!')//si no hay pokemons retorna un error
    return res.status(200).json({message:userDb})
  } catch (error) {
    return res.status(404).json({message:error.message})
  }
}

const registerUserHandler = async (req, res) => {
    let { email,password } = req.body;//traigo info de body
    try {
      if(!email||!password) throw Error('Los datos estan incompletos!');//evaluo los datos
      await User.create({email,password});

      return res.status(200).json({ok:true,message:'El usuario ha sido creado con exito!'});
    } catch (error) {
      return res.status(200).json({ok:false,message:error.message});
    }
};

module.exports = {
  getUsersHandler,
  registerUserHandler
}