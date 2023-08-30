const fabricantes = ['BMW', 'Audi', 'Mercedes']

function print(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(print)
fabricantes.forEach(fabricante => console.log(fabricante))


// Sem CallBack
const notas = [1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9]

let notasBaixas = []
for(let i in notas){
    if(i < 7)
        notasBaixas.push(notas[i])
}

console.log(notasBaixas)

//Com CallBack
notasBaixas = notas.filter((nota) => nota < 7)
console.log(notasBaixas)
