function talkAfter(seconds, phrase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(phrase)
            // reject(phrase)
        }, seconds * 1000)
    })
}

talkAfter(3, 'Que legal!')
    .then(phrase => phrase.concat('?!?'))
    .then(anotherPhrase => console.log(anotherPhrase))
    .catch(e => console.log(e))

function error(value, err){
    return new Promise((resolve, reject) => {
        if(Math.random < err){
            reject('Ocorreu um erro!')
        }else{
            resolve(value)
        }
    })
}

error('Test', 0.5).then(v => console.log(`Valor ${v}`))
    .then(v => `Value: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`Erro: ${err}`)
    )
    .then(console.log('Quase fim'))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(console.log('Fim!'))
