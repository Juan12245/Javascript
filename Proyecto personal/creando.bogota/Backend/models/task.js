const mongoose = require (`mongoose`)
const TaskSchema = new mongoose.Schema({
    titulo:{
        type:String,
        unique:true,
        required:true},
    completada:{
        type:Boolean, 
        default:false,
    },
    descripcion:{
        type:String,
        default: ` `,
    }, 
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:`User`
    }
    })
    module.exports = mongoose.model(`Task`, TaskSchema)