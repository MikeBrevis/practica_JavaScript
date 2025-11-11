//Write a function createHelloWorld. It should return a new function that always returns "Hello World".

function createHelloWorld() {
    return function () {
        return "Hello World"
    }
}
console.log(createHelloWorld()())
//

function createHelloWorld2() {
    return () => "Hello World2"
}

console.log(createHelloWorld2()())
//

let createHelloWorld3 = () => () => "Hello World3" 
console.log(createHelloWorld3()())