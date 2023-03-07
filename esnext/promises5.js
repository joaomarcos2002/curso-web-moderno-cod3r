function funcionarOuNao(valor, chanceErro)  {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')
            if(Math.randomI() < chanceErro) {
                reject('ocorreu um erro!')
            } else {
                resolve
            }
        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.9)
    .then(v => console.log(`Valor: ${v}`))
    .then(
        v => console.log(v),
        err => console.log(`Erro Esp.: ${err}`)
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim!'))