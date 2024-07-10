const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get('/', (request, response) => {
    let resultado = ""
    response.render(`conta`, {resultado})
})
app.post('/salvar', (req, response) => {
    let number = parseFloat(req.body.massa)
    let number2 = parseFloat(req.body.MassaMolecular)
    let resultado = (number / number2)
    response.render(`conta`, {resultado})

})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})