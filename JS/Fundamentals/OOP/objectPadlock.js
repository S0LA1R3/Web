const jaheira = {
    age: 24,
    role: 'druid',
    p: 'pink'
}

Object.preventExtensions(jaheira)
jaheira.age = 21
jaheira.name = 'a'
delete jaheira.p

console.log(jaheira)

const khalid = {
    age: 23,
    role: 'fighter',
    p: 'tiny'
}

Object.seal(khalid)
khalid.age = 21
khalid.name = 'b'
delete khalid.p

console.log(khalid)
