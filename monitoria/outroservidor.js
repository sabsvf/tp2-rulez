const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')


app.get('/', (request, response) => {
    pagina = ""
    response.render(`pagina`, {pagina})
})


app.post('/pagina', (req, response) => {
    pagina = req.body.pagina
    response.render(`pagina`, {pagina})

})


const PORT = 8080
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})