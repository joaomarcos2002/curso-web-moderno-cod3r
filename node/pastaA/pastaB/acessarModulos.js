const moduloA = require('../../moduloA')    //SEMPRE ESCREVER O NOME IGUAL DA PASTA QUE VAI SER IMPORTADA
console.logo(moduloA.ola)

//exemplo de exportação
//const saudacao= require('saudacao')
//console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)

//const http = require('http')
//http.createServer((req, res) => {
//    res.write('Bom dia')
//    res.end()
//}).listen(8080)