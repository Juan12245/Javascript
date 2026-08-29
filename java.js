

// Ejercicio Cajero ===========================================================

let pregunta= prompt("1 para depositar 2 para retirar");
let saldo = 1000000;
let cargoExtra= 0;
let cantidadRetiro;
let cargoTotal ; 
let cancelarRetiro = false;

function operacionInvalida(){
    alert ("operacion invalida")
}


if (pregunta == 1 ){
    let cantidadDeposito = Number(prompt("cuanto vas a depositar"))
    if (cantidadDeposito >= 0) {
    alert("depositaste un total de " + cantidadDeposito + " exitosamente")
    saldo = saldo + cantidadDeposito
    document.write ("tu saldo total es de: " + saldo)
}
    else{
        operacionInvalida()
    }
}



else if (pregunta == 2)
{ cantidadRetiro = Number(prompt("cuanto vas a retirar"))

    if (cantidadRetiro >= 0) {

        if (cantidadRetiro > 500000 ) {
        let confirmarMontoExtra= prompt("si retiras mas de 500000 se hara un cargo extra de 5000 pesos ¿Quieres proseguir?: Si o  No")
            if (confirmarMontoExtra == "si" || confirmarMontoExtra == "Si"|| confirmarMontoExtra == "SI") {
            cargoExtra = 5000
        }
            else if (confirmarMontoExtra == "no" || confirmarMontoExtra == "No" || confirmarMontoExtra == "NO"){
                alert ("retiro cancelado")
                cancelarRetiro=true
            }
            else {
                alert("no quedo claro, por favor volver a intentar")
                cancelarRetiro=true
            }
        }
        cargoTotal = cargoExtra + cantidadRetiro  
            
        if (cargoTotal <= saldo && cancelarRetiro==false){
        saldo = saldo - cargoTotal
        alert("retiraste un total de " + cantidadRetiro + " exitosamente")
        document.write("tu saldo total es de: " + saldo)
    }
        else  if (cancelarRetiro==false){
            alert ("saldo insuficiente")

        }

        }
        
    else {
        operacionInvalida()
    }
      
}


else {
    operacionInvalida()
}

