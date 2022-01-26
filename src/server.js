const express = require("express")
const server = express()
const routes = require("./routes")
const path = require("path")

//Processa o html reconhecendo o ejs refazendo-o
//e entregando js puro novamente
server.set('view engine', 'ejs')

//habilitar arquivos stativos
server.use(express.static("public"))

//Muda a referencia da localização da pasta views
server.set('views', path.join(__dirname, 'views'))

//usar o req.body para
server.use(express.urlencoded({ extended: true }))

// Rotas para cada página num arquivo externo
server.use(routes)

server.listen(3000, () => console.log("rodando"))