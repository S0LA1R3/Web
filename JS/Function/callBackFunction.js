const fabricantes = ['BMW', 'Audi', 'Mercedes']

function print(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(print)
fabricantes.forEach(fabricante => console.log(fabricante))
