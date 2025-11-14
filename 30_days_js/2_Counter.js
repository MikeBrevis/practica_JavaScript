/* 
Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
*/

var createCounter = function(n) {
    let cont = n

    function increment() {
        const actual = cont
        cont++
        return actual
    }
    return increment
}

const counter = createCounter(10)

console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12

//
var createCounter2 = function (n) {
    return function () {
        return n++
    }
}

const c1 = createCounter2(2)
console.log(c1())//2
console.log(c1())//3
console.log(c1())//4





