console.log('01)', '1' == 1)    // simblo de igualdade "==" e simblo de atribuição "="
console.log('02)', '1' === 1)   // simblo de extrema igualdade "===" não leva em consideração só o valor, mas o tipo de variavel também
console.log('03)', '3' != 1)    // simplo para verificar ser algo é diferente um do outro "!=" 
console.log('04)', '3' !== 1)   // simblo para verificar ser é extremamente diferente "!=="

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)   // sempre usar "===" extremamente para nunca confundir valores.
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)