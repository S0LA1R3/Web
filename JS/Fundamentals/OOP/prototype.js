const sanic = {
    color: 'blue',
    ability: 'insanicXpeed'
}

const wario = {
    color: 'wario',
    ability: 'wario'
}

console.log(sanic.__proto__)
console.log(sanic.__proto__ === Object.prototype)
console.log(wario.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

function amogus(){}
console.log(typeof Object, typeof amogus)
console.log(Object.prototype, amogus.prototype)
