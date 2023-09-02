Array.prototype.filter2 = function(callback){
    let newArray = []
    
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this))
            newArray.push(this[i])
    }

    return newArray
}

const produtos = [
    {nome: 'Eiffel Lego', preco: 6000, fragil: false},
    {nome: 'Macintosh', preco: 100, fragil: true},
    {nome: 'Marreta', preco: 500, fragil: false}
]

console.log(produtos.filter2(function(e){
    return e.preco > 3000 || e.fragil == true
}))
