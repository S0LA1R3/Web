const tecnologies = new Map()
tecnologies.set('react', {framework: false})
tecnologies.set('angular', {framework: true})

console.log(tecnologies.react)
console.log(tecnologies.get('react').framework)

const variousKeys = new Map([
    [function(){}, 'function'],
    [{}, 'object'],
    [123, 'number']
])

variousKeys.forEach((vl, key) => {
    console.log(key, vl)
})

console.log(variousKeys.has(123))
variousKeys.delete(123)
console.log(variousKeys.has(123))
console.log(variousKeys.size)

variousKeys.set(123, 'a')
variousKeys.set(123, 'b')
variousKeys.set(456, 'b')
console.log(variousKeys)
