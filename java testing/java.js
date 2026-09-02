
let free =false;

const validarCliente = (time) => {
    edad = prompt("Cual es tu edad?");
    if (edad > 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("Puedes pasar gratis");
            free = true;
        } else {
            alert("Son las " + time + "hs, podes pasar pero tenes que pagar la entrada");
        }
}
}

