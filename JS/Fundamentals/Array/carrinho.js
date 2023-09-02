Array.prototype.map2 = function(callback){
    let lista = []

    for(let i = 0; i < this.length; i++){
        lista.push(callback(this[i], i, this))
    }

    return lista
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Picanha Argentina", "preco": 45.15}',
    '{"nome": "Bife Dinamarquês", "preco": 30.21}', 
]

const precos = carrinho.map2(function(e){
    return JSON.parse(e).preco
})

console.log(precos)
