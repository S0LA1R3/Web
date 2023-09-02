Array.prototype.reduce2 = function(callback){
    let acumulador = this[0]

    for(let i = 1; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }

    return acumulador
}

const alunos = [
    {nome: 'Shaolas', coeficiente: 8.5, bolsista: false},
    {nome: 'MaShadow', coeficiente: 7.2, bolsista: true},
    {nome: 'FelipeFlop', coeficiente: 8.0, bolsista: true},
    {nome: 'Sampaio', coeficiente: 9.3, bolsista: false}
]

console.log(alunos.map(a => a.coeficiente))
const resultado = alunos.map(a => a.coeficiente).reduce2(function(acumulador, atual){
    console.log(atual)
    return acumulador + atual
})
console.log(resultado)

let anyBag = false
if(alunos.filter(function(e){return e.bolsista}).length >= 1)
    anyBag = true

let allBag = false
if(alunos.filter(function(e){return !e.bolsista}).length == 0)
    allBag = true

console.log(anyBag, allBag)
