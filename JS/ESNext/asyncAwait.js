const http = require('http')

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

const getStudents = async () => {
    const classA = await getClass2('A')
    const classB = await getClass2('B')
    const classC = await getClass2('C')

    return [].concat(classA, classB, classC)
}

getStudents()
    .then(students => students.map(name => name.nome))
    .then(names => console.log(names))
