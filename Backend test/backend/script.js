const express = require(`express`);
const app = express();
const dotenv =require(`dotenv`) ;

dotenv.config()

const auth = require(`./routes/auth.routes`)
const dbConnection = require (`./config/db`)
dbConnection()

app.use(express.json())

app.use(`/api/auth`,auth)


const PORT = process.env.PORT


app.listen(PORT, () =>{
    
    try{
        console.log(`conectado exitosamente a el puerto: ${PORT}`)
    }
    catch{
        console.error(`error con el programa, error : ${error}`)
    }
    })
