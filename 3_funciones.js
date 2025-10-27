/*  --------------------------------------------------------- FUNCIONES */

// Bloque de codigo que realiza una tarea especifica cuando se llama 

function saludo() {
    console.log("Hola a todos")
}

saludo() // se llama a la función

// Para devolver un resultado, se usa la palabra reservada return

function sumar() {
    return 1 + 1
}

// Guardar el resultado en una variable
const sumarFuntion = sumar()
console.log(sumarFuntion)

// Ver en consola
console.log(sumar())


// Funcion que devuelve un numero aleatoreo del 1 al 10

function getRandomNumeber() {

    const random = Math.random() // genera un numero aleatoreo del 0 al 1
    const multiplied = random * 10 // multiplica el numero decimal para que este de 0 a 10
    const rounded = Math.floor(multiplied) // Se redonde el numero hacia abajo para que este entre 0 y 9
    const result = rounded + 1 // Se suma 1 para que el numero este entre 1 y 10

    return result
}

console.log("Numero aleatorio entre 1 y 10 " + getRandomNumeber())

/*  --------------------------------------------------------- PARAMETROS */

function saludar(nombre) {
    console.log("Hola, " + nombre)
}

saludar("MIKE")
saludar("Guts")

// Se pueden designar varios parametros

function suma(a, b) { // Dos PARAMETROS, a y b
    return a + b
}

function resta(a, b) {
    return a - b
}

const resultadoSuma = suma(2, 5) // dos ARGUMENTOS, 2 y 5
console.log("La suma de ambos numeros es " + resultadoSuma)

const resultadoResta = resta(2, 5)
console.log("La suma de ambos numeros es " + resultadoResta)

// Funciones como parametro

function sumar(a, b) {
    return a + b
}

function multiplicar(a, b) {
    return a * b
}

function restar(a, b) {
    return a - b
}

console.log("La multiplicacion es " + multiplicar(8, 7))

// Función que recibe una operación como parámetro

function calcular(num1, num2, operacion) {
    const resultado = operacion(num1, num2)
    console.log('El resultado es: ' + resultado)
    return resultado
}

// Usamos diferentes operaciones
calcular(5, 3, sumar)       // El resultado es: 8
calcular(5, 3, multiplicar) // El resultado es: 15
calcular(5, 3, restar)      // El resultado es: 2

//Ejercicios

function decirAdios() {
    return "Adios!"
}

const miFn = decirAdios // se pasa la referencia a la funcion

console.log(decirAdios())
console.log(miFn())

// funcion a otra funcion 

function dup(n) {
    return n * 2
}

function div(n) {
    return n / 2
}

function aplicarYMostrar(valor, operacion) {
    const r = operacion(valor) // La funcion llega como argumento desde afuera
    console.log("Resultado:", r)
}

aplicarYMostrar(4, dup)

/*  --------------------------------------------------------- FUNCIONES ANONIMAS COMO PARAMETROS */

// Función anónima pasada directamente
calcular(10, 2, function (a, b) {
    return a / b
})
// El resultado es: 5

// O usando funciones flecha (las veremos más adelante)
calcular(4, 3, (a, b) => a ** b) // El resultado es: 64 (4 elevado a 3)

/*  --------------------------------------------------------- FUNCIONES EXPRESSION */

const funtionExpressionSum = function (a, b) {
    return a + b
} // No es necesario darle un nombre a la funcion

console.log(funtionExpressionSum(1, 2))

/*  --------------------------------------------------------- FUNCIONES FLECHA */

// sintaxis basica
// Son siempre anonimas y expression, es decir, que no tiene  nombre y se le asigna una variable

const miArrowFuntion = () => {
    // codigo a ejecutar
}

// return implicito: cuando se tiene solo una expresion, se pueden omitir las llaves y la palabra return

// Declaración de función regular
function sumar(a, b) {
    return a + b
}

// Función flecha
const sumarFlecha = (a, b) => {
    return a + b
}

// Función flecha con return implícito
const sumarFlechaIm = (a, b) => a + b

/*  --------------------------------------------------------- RECURSIVIDAD */

// tecnica en donde una funcion se llame a si misma

function cuentaAtras(numero) {
    // Condición base: Si el número que recibe es // Es importante tener SIEMPRE una condicion base, de no ser asi, la funcion se llamara infinitamente
    // menor de 0 entonces salimos de la función
    if (numero <= 0) {
        return
    }

    // Si el número era mayor o igual a 0, lo mostramos
    console.log(numero)

    // Y llamamos a la función con el número anterior
    cuentaAtras(numero - 1)
}

cuentaAtras(8)

// Ejemplo de recursividad devolviendo un valor

function factorial(n) {
    // Condición base: Si el número es 0 o 1, devolvemos 1
    // y no llamamos a la función de nuevo
    if (n === 0 || n === 1) {
        return 1
    } else {
        // Si el número es mayor que 1, llamamos a la función
        return n * factorial(n - 1)

    }
}

console.log(factorial(5)) // Resultado: 120