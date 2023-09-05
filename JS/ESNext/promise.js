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

error('Test', 0.5)
    .then(v => `Value: ${v}`)
    .then(console.log)
    .then(
        v => consol.log(v),
        err => console.log(`Erro: ${err}`)
    )
    .then(console.log('Quase fim'))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(console.log('Fim!'))

async function exec(){
    await talkAfter(1)
    console.log('1')

    await talkAfter(1)
    console.log('2')

    await talkAfter(1)
    console.log('3')
}

exec()
