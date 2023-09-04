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
