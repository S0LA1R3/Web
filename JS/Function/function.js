function fun1() {}

const fun2 = function() {}

const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

const obj = {}
obj.falar = function(){console.log('Opa, mano')}
obj.falar()

function run(fun){
    fun()
}
run(obj.falar)

function superSoma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}
superSoma(2, 3)(4)

const cincoMais = superSoma(3, 2)
cincoMais(4)

function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1, 3, 1, 3, 7, 8))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 'teste'))
console.log(soma('a', 'b', 'c'))

function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(1), soma1(1, 2), soma1(1, 2, 3), soma1(0, 0, 0))

function soma2(a, b, c){
    a = a != undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c

    return a + b + c
}

console.log(soma2(), soma2(1), soma2(1, 2), soma2(1, 2, 3), soma2(0, 0, 0))

function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(1), soma3(1, 2), soma3(1, 2, 3), soma3(0, 0, 0))

console.log(global, this, module.exports, this === module.exports)
