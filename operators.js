console.log('1' == 1)
console.log('1' === 1)
console.log('3' != 3)
console.log('3' !== 3)

const d1 = new Date(0)
const d2 = new Date(0)
console.log(d1 === d2)
console.log(d1 == d2) // different address
console.log(d1.getTime() == d2.getTime())

console.log(undefined == null)
console.log(null === undefined)

const resultado = nota => nota >= 7 ? 'Aprovado': 'Reprovado'
let nota = 1
console.log(resultado(nota))
console.log(resultado(10))
console.log(-nota)
