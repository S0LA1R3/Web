console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}
console.log('amogus'.reverse())

Array.prototype.first = function(){
    return this[0]
}
console.log([1, 2, 3, 4, 5].first())

String.prototype.toString = function(){
    return 'wasted'
}

console.log('amogus'.reverse())

function amogus(color = 'red', impostor = true){
    this.color = color,
    this.impostor = impostor
}

const red = new amogus
const purple = new amogus('purple', false)
console.log(red, purple)

function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const green = novo(amogus, 'green', false)
const cyan = novo(amogus, 'cyan', 'sus')
console.log(green, cyan)
