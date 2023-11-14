function randomNumbers(min, max, time){
    if(min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(function(){
            const factor = max - min + 1
            const random = parseInt(Math.random() * factor) + min
            resolve(random)
        }, time)
    }) 
}

function manyRandom(){
    return Promise.all([
        randomNumbers(1, 60, 4000),
        randomNumbers(1, 60, 3000),
        randomNumbers(1, 60, 2000),
        randomNumbers(1, 60, 1000),
        randomNumbers(1, 60, 500),
        randomNumbers(1, 60, 250)
    ])
}

console.time('promise')
manyRandom().then(console.log)
    .then(console.timeLog('promise'))
    .then(() => console.timeEnd('promise'))
