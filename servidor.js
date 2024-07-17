const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    let resultado = ""
    response.render(`conta`, {resultado})
})

app.get('/lua', (request, response) => {
    response.render(`lua`)
})


app.post('/salvar', (req, response) => {
    let number = parseFloat(req.body.massa)
    let number2 = parseFloat(req.body.MassaMolecular)
    let resultado = (number / number2)
    response.render(`conta`, {resultado})

})

app.get('/soma', (req, response) => {
    soma = parseFloat(request.query.n1) + parseFloat(request.query.n2)
    response.render(`resultado`, {resultado: soma})
    

})
app.get('/sub', (req, response) => {
    sub = parseFloat(request.query.n1) - parseFloat(request.query.n2)
    response.render(`resultado`, {resultado: sub})
    

})
app.get('/mult', (req, response) => {
    mult = parseFloat(request.query.n1) * parseFloat(request.query.n2) 
    response.render(`resultado`, {resultado: mult})
    

})
app.get('/div', (req, response) => {
    div = parseFloat(request.query.n1) / parseFloat(request.query.n2)
    response.render(`resultado`, {resultado: div})
    
})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})