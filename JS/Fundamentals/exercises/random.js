function luck(number){
    const luckN = parseInt(Math.random() * 10) + 1
    if(number == luckN){
        return `Congratulations! The drawn number is ${luckN}.`
    }else{
        return `What a pity! The drawn number is ${luckN}.`
    }
}

console.log(luck(10))
console.log(luck(1))
console.log(luck(2))
