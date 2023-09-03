const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    let chinaWomen = Object.entries(response.data).filter(employee => {
        if(employee[1].pais == 'China' && employee[1].genero == 'F'){
            return true
        }
    })

    let menor = {salario: 999999}
    for(let i in chinaWomen){
        if(chinaWomen[i][1].salario < menor.salario){
            menor = chinaWomen[i][1]
        }
    }
    console.log(menor)
})
