function inverter(object){
    const newObject = {}

    Object.values(object).forEach(function(e, i){
        newObject[e] = Object.keys(object)[i]
    })

    return newObject
}

console.log(inverter({a: 'b', c: 'd'}))
