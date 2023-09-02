const produtos = [
    {nome: 'Eiffel Lego', preco: 6000, fragil: false},
    {nome: 'Macintosh', preco: 100, fragil: true},
    {nome: 'Marreta', preco: 500, fragil: false}
]

console.log(produtos.filter(function(e){
    return e.preco > 3000 || e.fragil == true
}))
