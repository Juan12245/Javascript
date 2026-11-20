

const Task = require(`../models/task`)


const crearTarea = async (request, response)=>{
    try{
       
     const task  = new Task ({
        titulo: request.body.titulo,
        completada: request.body.completada,
        user: request.user.id,
        descripcion:request.body.descripcion
       })
        
       await task.save()
      
     response.status(201).json({task})
    }

    catch(error)
    { response.status(400).json(`error creando tarea: ${ error.message }`)
    }

    

}

const traerTareas = async (request, response)=>{
    try{
      const tasks = await Task.find({user:request.user.id})
      return response.status(200).json(tasks)
    }
    catch(error)
    { response.status(400).json(`error trayendo tareas: ${ error.message }`)
    }

    

}

const traerTareaPorId = async (request, response)=>{
    try{
      const task = await Task.findOne({
        _id:request.params.id,
        user:request.user.id})

        if (task == null){
          return response.status(404).json(`Tarea no encontrada`)
        }

       else {return response.status(200).json(task)}
      
    }
    catch(error)
    { response.status(400).json(`error trayendo tarea: ${ error.message }`)
    }

    

}


const actualizarTareas = async (request, response)=>{
    try{
      const task = await Task.findByIdAndUpdate(
        request.params.id,
        request.body,
    {new:true}
    )
      return response.status(200).json({task})
    }
    catch(error)
    { response.status(400).json(`error actualizando tarea: ${ error.message }`)
    }
}

const eliminarTarea = async (request, response)=>{
    try{
    await Task.findByIdAndDelete
    (request.params.id)
      return response.status(200).json({msg:`tarea eliminada correctamente`})
    }
    catch(error)
    { response.status(400).json(`error eliminando tarea: ${ error.message }`)
    }
}
module.exports={crearTarea, traerTareas, traerTareaPorId, actualizarTareas, eliminarTarea}