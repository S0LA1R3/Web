const num = [1, 2, 3, 4, 5]
const dobro = num.map(function(e){
    return 2 * e
})
console.log(num, dobro)

const forMoney = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

const money = dobro.map(function(e){
    return 2 * e
}).map(forMoney)
console.log(money)
