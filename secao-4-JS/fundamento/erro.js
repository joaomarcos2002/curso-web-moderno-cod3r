function tratarErroElancar(erro)    {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new date
    }
}

function imprimiNomeGritando(obj)   {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    }   catch (e) {
        tratarErroElancar(e)
    }   finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto'}
imprimiNomeGritando(obj)