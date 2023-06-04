function printSum(a, b) {
    return a + b || 'FOM'
}


console.log(printSum(2, 3))
console.log(printSum(2))
console.log(printSum(2, 3, 4, 5, 6))
console.log(printSum())

function sum(a,  b = 0) {
    return a + b
}


console.log(sum(2))
console.log(sum())

const funct = function (a, b) {
    return a + b
}

console.log(funct(2, 3))

const funct2 = (a, b) => {
    return a + b
}

console.log(funct2(2, 3))

const sub = (a, b) => a - b
console.log(sub(2, 3))

const a = a => a
console.log(a('a'))
