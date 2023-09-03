const fs = require('fs')
const path = __dirname + '/file.json'

const content = fs.readFileSync(path, 'utf-8')
console.log(content)

fs.readFile(path, 'utf-8', (err, content) => {
    const config = JSON.parse(content)
    console.log(`${config.color} ${config.creatureType}`)
})

const config = require('./file.json')
console.log(config)

fs.readdir(__dirname, (err, files) => {
    console.log('Path Content')
    console.log(files)
})
