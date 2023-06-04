{
    var a = 'a'
}
console.log(a)

function b() {
    var c = 'b'
    return c
}
console.log(b())
// console.log(c) erro

var number = 1
{
    var number = 2 // var has global scope and function scope
    console.log('in', number)
}
console.log('out', number)

var number = 1
{
    let number = 2 // let has global scope, function scope and block scope
    console.log('in', number)
}
console.log('out', number)
