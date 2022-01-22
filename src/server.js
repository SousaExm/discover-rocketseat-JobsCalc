const express = require("express")
const server = express()
const routes = require("./routes")

//Processa o html reconhecendo o ejs refazendo-o
//e entregando js puro novamente
server.set('view engine', 'ejs')


//habilitar arquivos stativos
server.use(express.static("public"))

// Rotas para cada página num arquivo externo
server.use(routes)


server.listen(3000, () => console.log("rodando"))