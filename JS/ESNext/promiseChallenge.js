const fs = require('fs')
const path = __dirname + '/iFoundAmogus.txt'

function readFile(path){
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, content) => {
            resolve(content.toString())
        })
    })
}

readFile(path).then(console.log)
