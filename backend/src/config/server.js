const port = 3003
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(allowCors)
app.use(queryParser())

app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`))

module.exports = app