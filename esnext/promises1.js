//let a = 1
//console.log(a)

//let p = new Promise(function(cumprirPromessa)   {
  //  cumprirPromessa(3)
//})

//function primeiroElemento(array)    {
//    return array[0]
//}

//function primeiraLetra(string)  {
  //  return string[0]
//}
 //const letraMinuscula = letra => letra.toLowerCase()
 //const letraElemento = letra => letra.toLowerCase()

 const primeiroElemento = arrayOuString => arrayOuString[0]
 const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve)   {
    resolve(['Ana', 'Bia','Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)