// Constantes HTML

const siguiente = document.getElementById("btnSiguiente")
const anterior = document.getElementById("btnAnterior")
const contenedor = document.getElementById("contenedor")
let pagina = 1

// obtencion personajes
const obtenerPersonajes = async() =>{
try{
    const respuesta = await fetch (`https://rickandmortyapi.com/api/character?page=${pagina}`)
    const data = await respuesta.json()
    
console.log(data.results)

contenedor.innerHTML =`
`
data.results.forEach(personaje => {
    contenedor.innerHTML +=`
    <div class="col-md-4 col-lg-3 text-center">
    <div class="card h-100">
        <img class=" card-img-top" 
        src="${personaje.image}" 
        alt="imagen">
        <div class="cad-body">
            <h5>${personaje.name}</h5>
            <p class="card-text">
                Estado: ${personaje.status}
            </p>
            <p class="card-text">
                Especie: ${personaje.species}
            </p>
        </div>
    </div>
</div>`
}) 
}


catch(error){
    console.error(`la API ha fallado, error: ` + error)
    contenedor.innerHTML = `
    
<span class="text-danger text-center">
    ocurrio un error al cargar los personajes, error: ${error}

</span>
`
}
}
obtenerPersonajes()

//  funciones botones
siguiente.addEventListener(`click`, ()=>{
    pagina ++
    obtenerPersonajes()
})

anterior.addEventListener(`click`, ()=>{
    
    if (pagina > 1)
        pagina --
    obtenerPersonajes()
})








