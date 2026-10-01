const User = require (`../models/User`)

const registrar = async (request, response) =>{
    try{
     const nombre= request.body.nombre
     const email= request.body.email
     const password= request.body.password
     
     let user =await User.findOne ({email: email})
     if (user) return response.status(400).json ({msg: `usuario ya creado`})
     
     user = new User ({
        nombre: nombre,
        email: email,
        password: password
    }) 

     await user.save()

     return response.status(201).json({msg: `cuenta creada exitosamente`})
    }
    catch(error){
        return response.status(500).json({error: `error al conectar con el usuario: ${error.message}`})
    }
    
}

module.exports = registrar