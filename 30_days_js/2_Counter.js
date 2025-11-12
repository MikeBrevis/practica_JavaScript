/* 
Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
*/

var createCounter = function(n) {
    let cont = n

    function increment() {
        const actual = cont
        cont++
        console.log(actual)
        return actual
    }

    return increment
}

const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12


var createCounter2 = function (n) {

    return function () {
        return console.log(n++)
    }
}
const c1 = createCounter2(2)
c1()//2
c1()//3
c1()//4

