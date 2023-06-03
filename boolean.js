let schrondinger = false
console.log(schrondinger)
schrondinger = true
console.log(schrondinger)

schrondinger = 1
console.log(!!schrondinger)

if (schrondinger)
    console.log('a')

console.log(!!3)
console.log(!!-1) // all integer numbers are true
console.log(!!' ') // true
console.log(!!'asdsadas') // true
console.log(!![]) // true
console.log(!!{}) // true
console.log(!!Infinity) // true
console.log(!!(schrondinger = true)) // true

console.log(!!(schrondinger = 0)) // false
console.log(!!'') // false
console.log(!!0) // false
console.log(!!null) // false
console.log(!!NaN) // false
console.log(!!undefined) // false

console.log(!!('' || null || 0 || 'aoba'))
console.log('' || null || 1 || 'aoba')

let name = ''
console.log(name || 'alberto maia')
