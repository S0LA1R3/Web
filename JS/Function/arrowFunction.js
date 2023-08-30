let double = function (a){
    return 2 * a
}
console.log(double(Math.PI))

double = (a) => {
    return 2 * a
}
console.log(double(Math.PI))

double = (a) => 2 * a
console.log(double(Math.PI))

let hello = () => 'Hello'
console.log(hello())

hello = _ => 'Hello'
console.log(hello())

function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa

let comparaComThis = function (param){
    console.log(this === param)
}
comparaComThis(global)
comparaComThis(this)
comparaComThis(module.exports)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(this)
comparaComThis(module.exports)
comparaComThis(obj)

comparaComThis = (param) => console.log(this === param)
comparaComThis(global)
comparaComThis(this)
comparaComThis(module.exports)

comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(this)
comparaComThis(module.exports)
comparaComThis(obj)
