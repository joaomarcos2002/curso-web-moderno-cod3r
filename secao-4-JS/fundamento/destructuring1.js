// novo recurso do ES2015

const pessoa = //{
    //nome: 'ANa'
    //idade: 5,   // linha errada
    //endereco: {
        //logradouro: ' Rua ABC'
        //numero: 1000    // linha errada
    //}
//}

//const {nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: {logradouro, numero, ceo} } = pessoa
console.log (logradouro, numero, cep)

const { conta: { ag, num} } = pessoa