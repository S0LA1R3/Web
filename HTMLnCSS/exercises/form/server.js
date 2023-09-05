const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<a href="http://127.0.0.1:5500/HTMLnCSS/index.html">voltar</a>\n<h1>VIVA!!!</h1>')
})

app.listen(3090)
