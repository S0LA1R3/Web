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

const product = {
    name: "Amogus Doll",
    price: 2077,
}

fs.writeFile(__dirname + '/generatedFile.json', JSON.stringify(product), err => {
    console.log(err || 'File Saved!')
})
