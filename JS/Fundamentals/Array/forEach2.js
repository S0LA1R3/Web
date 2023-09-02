Array.prototype.forEach2 = function(f){
    for(let i = 0; i < this.length; i++){
        f(this[i], i, this)
    }
}

const amogus = ['red', 'green', 'purple', 'cyan']
amogus.forEach2(function(nome, indice){
    console.log(`${indice + 1} ${nome}`)
})
