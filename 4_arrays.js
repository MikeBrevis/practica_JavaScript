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



