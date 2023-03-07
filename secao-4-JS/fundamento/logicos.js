function compras(trabalho1, trabalho2)  {
    const compraSorvete = trabalho1 || trabalho2    // "||" é igual o "si", então se caso a primeira ou a segundo informação for verdadeira, ele considera verdadeiro
    const compraTv50 = trabalho1 && trabalho2   // "&&" é igual o "ou", verifcar quais das duas informações é verdadeiras.
    //const compraTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const compraTv32 = trabalho1 != trabalho2
    const manterSaudavel = !compraSorvete   // operador unário

    return{ compraSorvete, compraTv50, compraTv32, manterSaudavel}
}

console.log (compras(true, true))
console.log (compras(true, false))
console.log (compras(false, true))
console.log (compras(false, false))