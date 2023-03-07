console.log('a =', a)
var a = 2   // Quando não declaramos o Var no começo e fizemos ele no meio do código
console.log('a =', a)   // ele é jogado para o top da leitura do código

console.log('a =', a)
let a = 2   // Quando declaramos let no meio do código, ele dá "erro"
console.log('a =', a)   // pois ele não é jogado para o top do código