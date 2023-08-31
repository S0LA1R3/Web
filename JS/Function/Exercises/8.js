const pontuacoes = '10 20 30 40 11 2 5 3 29 51'
let vetor = []
let menor = 999
let atual = ''

for(let i in pontuacoes){
    atual += pontuacoes[i]
    if(pontuacoes[i] == ' ' || i == pontuacoes.length - 1){
        if(Number(atual) > vetor.at(-1) || vetor.length == 0){
            vetor.push(atual)
        }
        atual = ''
    }

    if(pontuacoes[i] < menor)
        menor = pontuacoes[i]
    
}

for(let i in vetor){
    console.log(`Recorde ${Number(i) + 1}: ${vetor[i]} pontos`)
}
console.log(`Pior jogo: ${menor} pontos`)
