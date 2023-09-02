const sum = function(x,  y){
    return x + y
}

const result = function (x, y, operation = sum){
    return operation(x, y)
}
console.log(result(1, 2, sum))
console.log(result(1, 2, function (x, y){
    return x - y
}))
console.log(result(1, 2, (x, y) => x * y))
