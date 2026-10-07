const jwt = require (`jsonwebtoken`)

module.exports= (request, response, next)=>{
   
    try{
    const headerAuthorization =request.header(`Authorization`)
    const token = headerAuthorization.split(` `)[1]

        if (!token) { return response.status(401).json ({msg:`token invalido`})}
        
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    
    request.user= decoded
    next()
}

    catch(error){ return response.status(401).json ({msg:`token invalido`})
}}
