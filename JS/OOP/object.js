const produto = new Object

produto.nome = 'a'
produto['descrição do produto'] = 'b'
produto.preco = 3

console.log(produto)

delete produto.preco

console.log(produto)

const carro = {
    valor: 1,
    funcao() {
        return 'a'
    },
    objeto: {'a': 'b'},
    lista: []
}

console.log(carro)

const amogus = Object.create(null)
amogus.nome = 'sus'
console.log(amogus)

const JASON = JSON.parse('{"info": "IFoundAmogus!"}')
console.log(JASON.info)

Object.freeze(amogus)
amogus.nome = 'notSus'
console.log(amogus)
