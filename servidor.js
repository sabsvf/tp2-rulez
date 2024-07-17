const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    //var resultado = ""
    //response.render(`conta`, {resultado})
})

app.get('/lua', (request, response) => {
    var resultado2 = ""
    response.render(`lua`, {resultado2})
})


app.post('/salvar', (request, response) => {
    let number = parseFloat(req.body.massa)
    let number2 = parseFloat(req.body.MassaMolecular)
    let resultado = (number / number2)
    response.render(`conta`, {resultado})

})

app.get('/soma', (request, response) => {
    resultado2 = parseFloat(request.query.n1) + parseFloat(request.query.n2)
    response.render(`lua`)
    

})
app.get('/sub', (request, response) => {
    resultado2 = parseFloat(request.query.n1) - parseFloat(request.query.n2)
    response.render(`lua`)
    

})
app.get('/mult', (request, response) => {
    resultado2 = parseFloat(request.query.n1) * parseFloat(request.query.n2) 
    response.render(`lua`)
    

})
app.get('/div', (request, response) => {
    resultado2 = parseFloat(request.query.n1) / parseFloat(request.query.n2)
    response.render(`lua`)
    
})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})