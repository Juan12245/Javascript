const User = require (`../models/User`)

const registrar = async (request, response) =>{
    try{
     const {nombre, email, password} = request.body;
     
     let user =await User.findOne ({email: email})
     if (user) response.status(400).json ({msg: `usuario ya creado`})
     
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


const login = async (request, response) =>{
    try
    {
        const {email, password} = request.body;
        let user= await User.findOne({email})

        if (!user) { return response.status(400).json ({msg:`usuario no existente`})}

        const passwordMatch= password === user.password;
        if(!passwordMatch){ return response.status(400).json ({msg: `contraseña incorrecta`})}

        return response.status(200).json({msg:`sesion iniciada exitosamente`})

    } catch(error){
        return response.status(500).json({error: `error al conectar con el usuario: ${error.message}`})
    }
}
module.exports = {registrar, login}