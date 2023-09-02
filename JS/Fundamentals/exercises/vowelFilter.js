function vowelFilter(word){
    const newWord = word.split('').filter(function(e){
        if('aeiou'.indexOf(e) != -1){
            return false
        }else{
            return true
        }
    })

    return newWord.join('')
}

console.log(vowelFilter('amogus'))
