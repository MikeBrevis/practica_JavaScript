/*  --------------------------------------------------------- ARRAYS - COLECCIONES DE ELEMENTOS */

// Asignar array a una variable

const numbers = [1, 2, 3, 4]
let names = ["mike", "Toph", "Rocky"]

//Acceder a los elementos de un array

console.log(numbers[2]) // imprime 3
console.log(names[1]) // imprime Toph

// Se pueden modificar los elementos de un array

numbers[0] = 10
numbers[1] = 20

console.log(numbers) // se reemplaza el array por los valores [ 10, 20, 3, 4 ]

/*  --------------------------------------------------------- METODOS */
const frutas = ["Pera", "Manzana", "Guinda", "Piña"]

/*  --------------------------------------------------------- .length */
//Conocer cual es la longitud de un array .lengt
console.log(frutas.length) // 4

// Cortar la longitud asignando un nuevo valor a .lengt
frutas.length = 2
console.log(frutas) // ["Pera", "Manzana"]

/*  --------------------------------------------------------- .push() */
//Añadir un elemento al final de array
frutas.push("Sandia")
console.log(frutas) // ["Pera", "Manzana", "Sandia"]

// al asignarla como variable, devuelve la nueva longitud
const newLong = frutas.push("Fresa")
console.log(frutas) // [ 'Pera', 'Manzana', 'Sandia', 'Fresa' ]
console.log(newLong) // 4

/*  --------------------------------------------------------- .pop() */
//Elimina y devuelve el ultimo elemento del array

const ultimaFruta = frutas.pop()

console.log(frutas) // [ 'Pera', 'Manzana', 'Sandia' ]
console.log(ultimaFruta) //Fresa

/*  --------------------------------------------------------- .shift() */
//Elimina y devuelve el primer elemento del array

const primeraFruta = frutas.shift()

console.log(frutas) // ['Manzana', 'Sandia' ]
console.log(primeraFruta) //Pera

/*  --------------------------------------------------------- .unshift() */
//Añadir un elemento al principio de array
frutas.unshift("Platano")
console.log(frutas)//[ 'Platano', 'Manzana', 'Sandia' ]

/*  --------------------------------------------------------- CONCATENAR ARRAYS */

/*  --------------------------------------------------------- METODO CONCAT */
const numbers1 = [1, 2, 3]
const numbers2 = [4, 5, 6]

const allNumbers = numbers1.concat(numbers2)
console.log(allNumbers)//[ 1, 2, 3, 4, 5, 6 ]

/*  --------------------------------------------------------- SPREAD OPERATOR */

const allNumberSpread = [...numbers1, ...numbers2]
console.log(allNumberSpread)//[ 1, 2, 3, 4, 5, 6 ]

/*  --------------------------------------------------------- EJERCICIO PRACTICO */

function procesarPedido(pedidos) {

    const nombre = pedidos.shift() // "Extrae el nombre"
    pedidos.unshift("bebida") // Añade bebida al principio
    pedidos.push(nombre)
    return pedidos
}

const pedido1 = procesarPedido(["Marco", "pizza", "empanada"])
console.log(pedido1) // [ 'bebida', 'pizza', 'empanada', 'Marco' ]

/*  --------------------------------------------------------- Iteración de Arrays en JavaScript  */

let bebidas = ["agua", "cafe", "vino", "energetica"]

// Bucle WHILE 
let i = 0
while (i < bebidas.length) { // .length = 4
    console.log(bebidas[i])
    i++
}

// Bucle FOR 
for (let x = 0; x < bebidas.length; x++) {
    console.log(bebidas[x])
}

// Bucle FOR ...OF
for (let bebida of bebidas) { // no se necesita crear una variable, recorre los elementos del array
    console.log("tomate un " + bebida)
}

/*no podemos usarlo para recorrer un array en orden inverso y tampoco tenemos acceso al índice del elemento que estamos iterando.*/

// array.forEach()
bebidas.forEach(function (bebida, index, originalArray) { // recibe como parámetros el elemento que se está iterando en ese momento, el índice del elemento y el propio array.
    console.log(bebida, index, originalArray)
})

// array.forEach() con arrow funtion
bebidas.forEach((bebida, index) => {
    console.log("arrow funtion " + bebida, index)
})

/*  --------------------------------------------------------- EJERCICIO PRACTICO */

function sumarPares(numeros) {
    let suma = 0
    for (let x = 0; x < numeros.length; x++) {
        if (numeros[x] % 2 == 0) {
            suma += numeros[x]
        }
    }
    return suma
}

console.log(sumarPares([1, 2, 3, 4, 5, 6])) // suma pares = 12

/*  --------------------------------------------------------- BUSQUEDA EN ARRAY CON METODOS */

const personas = ['daniel', 'diego', 'marcelo', 'cristo']

// indexOf
// Position = personas.indexOf('diego')
const diegoPosition = personas.indexOf('diego')
console.log('la posicion de diego es ' + diegoPosition)

// includes
// Determina si un elemento existe o no, devolviendo un booleano
// Se puede usar para buscar una subcadena dentro de una cadena de texto: 'Hola mundo'.includes('Hola') // -> true
const marceloincludes = personas.includes('marcelo')
console.log(`marcelo existe? ${marceloincludes}`)

// Some
// Verifica si al menos un elemento del array cumple una condicion

const shortNames = ['leo', 'isa', 'ian']

const nombreLargo = shortNames.some(name => name.length > 3) // se le da una funcion con cada uno de los string, si uno cumple con la condicion, da true
console.log('cumple? ' + nombreLargo) // false

// Every
// Verifica si todos los elementos cumplen con la condicion

//¿Todos los elementos tienen 3 caracteres de largo?
const leghtNames = shortNames.every(name => name.length == 3) // Todos cumplen 
console.log('cumple? ' + leghtNames) // true

// ¿Todos los números son pares?
const parNumbers = [2, 4, 7, 10, 12]
const todosSonPares = parNumbers.every(number => number % 2 === 0)
console.log("todos son pares? " + todosSonPares) // -> false

// Find
// Encuentra el primer elemento y lo devuelve

const findNumbers = [2, 4, -1, 7]
const findNegativeNumber = findNumbers.find(number => number < 0)
console.log(findNegativeNumber) // -1

// FindIndex
// Devuelve el indice del primer elemento que cumple la condicion

const findImpar = findNumbers.findIndex(impar => impar % 2 == 1)
console.log(findImpar) // 1 (primer valor impar = 7)

// endsWith
// determina si una cadena de texto termina termina con los caracteres indicados
const str1 = "Cats are the best!";
console.log(str1.endsWith("best!")); //true