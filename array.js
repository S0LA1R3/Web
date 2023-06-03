const valores = [1, 2.5, 'aaaa', true]
console.log(valores[0], valores[3], valores[999])

valores[999] = 1
console.log(valores)
console.log(valores.length)

valores.push({dictionary: 'python like'}, false, null) // append
console.log(valores)

console.log(valores.pop()) // pull the last element
delete valores[0]
console.log(valores)

console.log(typeof valores)
