const porta = 3003

const express = require('express')
const app = express ()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produto', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('./produtos/:id/:nome',(req, res, next) => {
    res.send(bancoDeDados.getProdutos(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    reduce.send(produto) // JSON
})

app.post('/produtos/: id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    reduce.send(produto) // JSON
})

app.delete('/produtos/: id', (req, res, next) =>{
    const produto = bancoDeDados.excluirProduto(req.params.id)
    reduce.send(produto) // JSON
})

//app.get('/produto', (req, res, next) => {
  //  res.send({nome: 'Notebook', preco: 123.45}) // Converter para JSON
//})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})