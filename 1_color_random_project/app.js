// Seleccionar elementos desde el DOM: llamar al boton y al texto
const boton = document.getElementById("boton-color")
console.log(boton)

const color = document.getElementById("color")
console.log(color)

// enerar una funcion que maneje el proceso de generar un color al azar

function generarColor() {
    let digitos = "0123456789ABCDEF"; // Cadena de caracteres con todos los digitos posibles para generar el color (0-9: A-F)
    let colorHex = "#" // guarda el color que se genera

    for (let i = 0; i < 6; i++) { // se define un ciclo for con 6 iteraciones 
        let indiceAleatorio = Math.floor(Math.random() * 16) // arroja un numero aleatoreo entre 0 y 15 (los indices de la cadena digitos)
        colorHex += digitos[indiceAleatorio]
    }
    return colorHex
}

console.log(generarColor())







