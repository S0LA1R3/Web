let a = 3

global.b = 3

this.c = 456
this.d = false
this.e = 'test'

console.log(a)
console.log(global.b)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports === global)
console.log(module.exports)
module.exports = { m: 1, c: 5, a: 54}
console.log(module.exports)

abc = 3
console.log(global.abc)
console.log(global)
console.log(global === this)
