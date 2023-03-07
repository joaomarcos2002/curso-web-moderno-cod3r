// pessoa -> 123 (endereço de mémoria)->{...} (objeto do endereço de mémoria) conseguimos mudar o dado dentro do objeto mas não a const 
const pessoa = { nome: ' João'}
console.log(pessoa);

// pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João'})
// pesssoaConst.nome = 'Maria'
console.log(pessoasConstante)