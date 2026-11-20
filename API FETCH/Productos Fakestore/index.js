const btnAnterior = document.getElementById("btnAnterior")
const btnSiguiente = document.getElementById("btnSiguiente")
const contenedor = document.getElementById  ("contenedor")



const obtenerProductos= async () => {
    try{
        const respuesta = await fetch ("https://fakestoreapi.com/products")
        const data = await respuesta.json()
console.log(data)
contenedor.innerHTML =`
`
data.forEach(producto => {
    contenedor.innerHTML +=`
    <div class="col-md-4 col-lg-3 text-center">
    <div class="card h-100">
        <img class=" card-img-top w-75 align-self-center" 
        src="${producto.image}" 
        alt="imagen">
        <div class="cad-body">
            <h5>${producto.title}</h5>
            <p class="card-text">
                Precio: ${producto.price}
            </p>
            <p class="card-text">
                Categoria: ${producto.category}
            </p>
        </div>
    </div>
</div>`
})
    }
    catch(error){
        console.error(`hubo un error = ` + error)
    }
}

obtenerProductos ()

btnAnterior.addEventListener(`click`, ()=>{
    pagina --
    obtenerProductos()
})
