const instanciaA = require('./instanciaUnica')
const instanciaB = require('./instanciaUnica')

const instanciaC = require('./instanciaNova')()
const instanciaD = require('./instanciaNova')()

instanciaA.inc()
console.log(instanciaA.valor, instanciaB.valor)

instanciaC.inc()
console.log(instanciaC.valor, instanciaD.valor)
