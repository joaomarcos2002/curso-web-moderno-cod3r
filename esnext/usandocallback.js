// sem promise
const { notEqual } = require('assert')
const http = require('http')
const { callbackify } = require('util')

const getTurma = (letra, callbackify) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados
        })
        
        res.on('end', () => {
            callbackify(JSON.parse(resultado))
        })
    })
}

let  nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nomes}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nomes}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nomes}`))
            console.log(nomes)
        })
    })
})