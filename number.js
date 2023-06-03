const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1)
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.123
const avaliacao2 = 4.123

const total = avaliacao1 * peso2 + avaliacao2 * peso1
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2))
console.log(typeof media)
console.log(typeof Number)

// "estranhezas"
console.log(7 / 0) // infinity
console.log("10" / 2) // "10,2" won't would work but "10.2" yes
console.log("Show!" * 2) // NaN
console.log(0.1 + 0.7) // no round
console.log((10).toString()) // console.log(10.toString()) error
