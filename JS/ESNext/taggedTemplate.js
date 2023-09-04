function tag(parts, ...values){
    console.log(parts)
    console.log(values)
    return 'Another String'
}

const student = 'amogus'
const situation = 'aproved'
console.log(tag`${student} is ${situation}`)

function real(parts, ...values){
    const result = []

    values.forEach((value, index) =>{
        value = isNaN(value) ? value : `R$${value.toFixed(2)}`
        result.push(parts[index], value)
    })

    return result.join('')
}

const price = 29.99
const installmentPrice = 11
console.log(real`1x of ${price} or 3x of ${installmentPrice}`)
