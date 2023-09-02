function object(){}
console.log(object.prototype)

const obj1 = new object
const obj2 = new object

console.log(obj1.__proto__ === obj2.__proto__)
console.log(object.prototype === obj1.__proto__)

object.prototype.name = 'thing'
object.prototype.break = function (){ 
    console.log(`The ${this.name} is broken`)
}

obj1.break()

obj2.name = 'water Bottle'
obj2.break()

const obj3 = {}
obj3.__proto__ = object.prototype
obj3.name = 'spoon'
obj3.break()

console.log((new object).__proto__ === object.prototype)
console.log(object.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
