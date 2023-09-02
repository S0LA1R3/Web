const valores = [1, 2.5, 'aaaa', true]
console.log(valores[0], valores[3], valores[999])

valores[999] = 1
console.log(valores)
console.log(valores.length)

valores.push({'dictionary(object)': 'python like'}, false, null) // append
console.log(valores)
console.log(typeof valores[1000])

console.log(valores.pop()) // pull the last element
delete valores[0]
console.log(valores)

console.log(typeof valores)

const array = [1, 7, 2, 5, 0]
array.sort()
console.log(array)
