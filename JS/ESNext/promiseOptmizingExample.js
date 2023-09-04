const http = require('http')

// No Promise
const getClass = (letter, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`
    http.get(url, res => {
        let result = ''

        res.on('data', data => {
            result += data
        })

        res.on('end', () => {
            callback(JSON.parse(result))
        })
    })
}

let names = []
getClass('A', students => {
    names = names.concat(students.map(a => `A: ${a.nome}`))
    getClass('B', students => {
        names = names.concat(students.map(a => `B: ${a.nome}`))
        getClass('C', students => {
            names = names.concat(students.map(a => `C: ${a.nome}`))
            console.log(names)
        })
    })
})

// With Promise
const getClass2 = letter => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let result = ''

            res.on('data', data => {
                result += data
            })

            res.on('end', () => {
                try{
                    resolve(JSON.parse(result))
                }catch(e){
                    reject(e)
                }
            })
        })
    })
}

let names2 = []
getClass2('A').then(students => {
    names2 = names2.concat(students.map(a => `A: ${a.nome}`))
    getClass2('B').then(students => {
        names2 = names2.concat(students.map(a => `B: ${a.nome}`))
        getClass2('C').then(students => {
            names2 = names2.concat(students.map(a => `C: ${a.nome}`))
            console.log(names2)
        })
    })
})

// Promise Optimizing

Promise.all([getClass2('A'), getClass2('B'), getClass2('C')])
    .then(classes => [].concat(...classes))
    .then(students => students.map(student => student.nome))
    .then(names => console.log(names))
