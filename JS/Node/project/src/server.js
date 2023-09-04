const port = 3060
const express = require('express')
const bodyParser = require('body-parser')
const dataBase = require('./dataBase')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(dataBase.getProducts())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(dataBase.getProduct(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const product = dataBase.setProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})

app.put('/produtos/:id', (req, res, next) => {
    const product = dataBase.setProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})

app.delete('/produtos/:id', (req, res, next) =>{
    res.send(dataBase.removeProduct(req.params.id))
})

app.listen(port, () =>{
    console.log(`Executing server on localhost:${port}`)
})
