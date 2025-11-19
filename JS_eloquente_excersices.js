// ejercicio 1, pag 37

/* Escribe un bucle que realice siete llamadas a console.log ara mostrar:
#
##
###
####
#####
######
####### */

let simbol = ""
for (n = 0; n < 7; n++) {
    simbol += "#"
    console.log(simbol)
} 

let simbol2 = ""
while (simbol2.length < 7) {
    simbol2 += "#"
    console.log(simbol2)
}

// Escribe un programa que use console.log para imprimir todos los numeros del 1 al 100. para los numnero %3 impreme "Fizz" y los %5 imprime "Buzz"

for (let n = 1; n <= 20; n++) {
    if (n % 3 == 0) {
        console.log("Fizz")
    } else if (n % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(n)
    }
}

for (let n = 1; n <= 20; n++) {
    if (n % 3 == 0  && n % 5 == 0) {
        console.log("FizzBuzz")
    } else if (n % 3 == 0) {
        console.log("Fizz")
    } else if (n % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(n)
    }
}

// crea una cadena que represente un tablero de 8x8, usando caracteres de salto de linea para separar las lineas. (n\)

/*  
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # # 
*/

let size = 8

for (let fila = 0; fila < size; fila++) {
    text = ""
    if (fila % 2 == 0) {
        for (let n = 0; n < size / 2; n++) {
            text += " #"
        }
    } else {
        for (let n = 0; n < size / 2; n++) {
            text += "# "
        }
    }
    console.log(text)
}




