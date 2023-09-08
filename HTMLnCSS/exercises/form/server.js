const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./dataBase')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, resp) => {
    console.log(db.setUser(req.body))
    resp.send('<a href="http://127.0.0.1:5500/HTMLnCSS/index.html">voltar</a>\n<h1>VIVA!!! Usuário Inlcuído.</h1>')
})

app.post('/usuarios/change', (req, resp) => {
    for(let i of db.getUsers()){
        if(req.body.name === i.name && req.body.password === i.password){
            console.log(db.changeUser(req.body))
            resp.send('<a href="http://127.0.0.1:5500/HTMLnCSS/index.html">voltar</a>\n<h1>VIVA!!! Usuário Alterado.</h1>')
            break
        }else if(i === db.getUsers[-1]){
            resp.send('<a href="http://127.0.0.1:5500/HTMLnCSS/index.html">voltar</a>\n<h1>Usuário ou senha incorretos!</h1>')
        }
    }
})

app.listen(3090)
