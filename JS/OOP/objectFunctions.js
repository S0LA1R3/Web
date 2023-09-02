const amogus = {
    color: 'red',
    impostor: true,
    kills: 4
}

console.log(Object.keys(amogus), Object.values(amogus))
console.log(Object.entries(amogus))

Object.defineProperty(amogus, 'ejected', {
    enumerable: false,
    writable: true,
    value: true
})

amogus.ejected = false
console.log(amogus.ejected)
console.log(Object.entries(amogus))

const a = {a: 'b'}
const mo = {mo: 'mo'}
const gus = {gus: 'gus', a: 'a'}
const amogus2 = Object.assign(a, mo, gus)
console.log(amogus2)
