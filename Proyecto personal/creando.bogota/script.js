// ====================PRODUCTOS===============================
const productos=[
    {
    id: 1,
    nombre: "Muñeca costurera",
    precio: 20000,
    imagen: "imagenes-general/productos/oso/oso editoado 1.jpg"
    }, 
    {
    id: 2,
    nombre: "Peluche oso",
    precio: 25000,
    imagen: "imagenes-general/productos/oso/oso editoado 1.jpg"
    }, 
    {
    id: 3,
    nombre: "Jirafa Amigurumi",
    precio: 40000,
    imagen: "imagenes-general/productos/jirafa/jirafa-editada.jpg"
    }, 
    {
    id: 4,
    nombre: "Molde Jirafa",
    precio: 5000,
    imagen: "imagenes-general/productos/materiales/Materiales-Jirafa.jpg"
    },
    
    { 
     id: 5,
    nombre: "Materiales crochet x5",
    precio: 80000,
    imagen: "imagenes-general/productos/materiales/Kit-crochet-x5.jpg"
    }, 
    ]


    //==============================CARRITO===========================
    let carrito = []





  
// ==================================ITEMS HTML================================

const carritoVacio = document.getElementById("carrito-vacio");
const productosEnCarrito = document.getElementById("productos-carrito");
const btnAgregarAlCarrito = document.querySelectorAll(".btn-agregar-al-carrito");
const btnComprar = document.getElementById("boton-comprar"); 
const btnEliminarItem = document.querySelectorAll(".btn-eliminar-item")
const totalAPagar = document.getElementById ("total-a-pagar");
const subtotal = document.getElementById ("subtotal")






       // ===========================EVENTOS================================================
const formatearPrecio = (valor) =>{
    return new Intl.NumberFormat ("es-CO", {
    style: "currency",
    currency :"COP",
    maximumFractionDigits: 0
    }).format(valor)
    }


btnAgregarAlCarrito.forEach(boton => {
boton.addEventListener("click", ()=>{
    const id = Number(boton.dataset.id)
    agregarAlCarrito(id)
})

});



const actualizarCarrito =()=>{
    productosEnCarrito.innerHTML = ``
    if (carrito.length === 0) {
    carritoVacio.style.display =`block`
    }
    else{
    carritoVacio.style.display =`none`
    }


    carrito.forEach (producto =>{

        const divProducto = document.createElement (`div`)
    
        divProducto.innerHTML = `
        <div class="item-en-carrito">
                <img src="${producto.imagen}">

                <div class="div-texto-items-carrito">
                    <div class="items-carrito-texto-izq">
                        <h4 class="texto-centrado nombre-item-carrito">${producto.nombre}</h4>

                        <div class="div-cantidad-item-carrito">
                        <button class="btn-disminuir-cantidad" data-id= "${producto.id}"> - </button> 
                        <h6 class="cantidad-item-carrito">${producto.cantidad}</h6>
                        <button class="btn-aumentar-cantidad" data-id= "${producto.id}"> + </button>
                        <button class="btn-eliminar-item"><img class= "img-eliminar-item" data-id= "${producto.id}" src= "iconos/icono-basura.png"></button>
                        </div>  
                    </div>
                        
                
                    <h5 class="texto-centrado precio-item-carrito">${formatearPrecio(producto.precio * producto.cantidad)}</h5> 
                    </div>
                    </div>
                    
            </div>`

        productosEnCarrito.appendChild(divProducto)
    })
agregarEventosCarrito ()
}


const actualizarTotal = () => {

    let total = 0

    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad
    })

    subtotal.textContent = `${formatearPrecio(total)}`
    totalAPagar.textContent = formatearPrecio(total)
}



    // ============================Agregar productos=======================



const agregarAlCarrito = (id) =>{
    const producto = productos.find(producto => producto.id === id)
    const productosCarrito = carrito.find(producto => producto.id === id)
    if (productosCarrito)
        {productosCarrito.cantidad++}
        else{
            carrito.push({...producto, 
                cantidad:1})
                 }
                 actualizarTotal()
                 actualizarCarrito ()
       
}
// =======================Eventos de Botones =========================
 
const agregarEventosCarrito = () =>{
const btnAumentarItem = document.querySelectorAll(".btn-aumentar-cantidad")

btnAumentarItem.forEach(boton => {
    boton.addEventListener ("click", () =>{
    const id= Number(boton.dataset.id)
    aumentarItem (id)
})
})



const aumentarItem = (id) =>{
    const producto =carrito.find(producto => producto.id === id)
    if (producto)
        {producto.cantidad++}
    actualizarCarrito()

}  


const btnDisminuirItem = document.querySelectorAll(".btn-disminuir-cantidad")

btnDisminuirItem.forEach(boton => {
    boton.addEventListener ("click", () =>{
    const id= Number(boton.dataset.id)
    disminuirItem (id)
})
})
    
const disminuirItem = (id) => {

    const producto = carrito.find(producto => producto.id === id)

    if (producto) {

        if (producto.cantidad > 1) {
            producto.cantidad--
        } else {
            carrito = carrito.filter(producto => producto.id !== id)
        }

    }

    
    actualizarCarrito()

}

const btnEliminarItem = document.querySelectorAll(".btn-eliminar-item")

btnEliminarItem.forEach(boton => {

    boton.addEventListener("click", () => {

        const id = Number(boton.querySelector("img").dataset.id)

        eliminarItem(id)

    })
})
const eliminarItem = (id) => {

    carrito = carrito.filter(producto => producto.id !== id)

    actualizarCarrito()
}

}



