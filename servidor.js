const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get('/', (request, response) => {
    let numero = 5
    response.send(`A letra x é: $(numero)`)
})
app.listen(8080)
