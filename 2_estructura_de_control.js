/* codigo condicional con IF */

const edad = 15

if (edad >= 18) {
    console.log("Es mayor de edad")

} else if (edad >= 16) {
    console.log("Es CASI mayor de edad")

} else {
    console.log("No es mayor de edad")
}

// Operadores logicon para la condicion

const edad2 = 16
const carnet = true

if (edad2 >= 18 && carnet) {
    console.log("Puede conducir")
} else {
    console.log("No puede conducir")
}

// Designar variables con el resultado de una condicion (refactorización)

const Diego = 18
const tieneCarnet = true
const puedeConducir = Diego >= 18 && tieneCarnet // true

if (puedeConducir) {
    console.log("Puede conducir")
} else {
    console.log("No puede conducir")
}