function wordFilter(word, array){
    const newArray = array.filter(function(e){
        if(e.indexOf(word) != -1){
            return true
        }else{
            return false
        }
    })

    return newArray
}

console.log(wordFilter('asdggas', ['programação', 'mobile', 'profissional']))
