const pontuacoes = '10 20 30 40 11 2 5 3 29 51'

const record = (score) => {
    let vetor = []
    let menor = 999
    let atual = ''
    for(let i in pontuacoes){
        atual += pontuacoes[i]
        if(pontuacoes[i] == ' ' || i == pontuacoes.length - 1){
            if((Number(atual) > vetor.at(-1) || vetor.length == 0) && menor != 999){
                vetor.push(atual)
            }
            if(Number(atual.substring(0, atual.length - 1)) < menor)
                menor = atual
            atual = ''
        }
    }

    for(let i in vetor){
        console.log(`Recorde ${Number(i) + 1}: ${vetor[i]} pontos`)
    }
    console.log(`Pior jogo: ${menor} pontos`)
}

record(pontuacoes)
