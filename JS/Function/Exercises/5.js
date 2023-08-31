const correctFunction = (value) => {
    value = Number(value.toFixed(2))
    return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}

console.log(correctFunction(0.300000000000000000000004))
