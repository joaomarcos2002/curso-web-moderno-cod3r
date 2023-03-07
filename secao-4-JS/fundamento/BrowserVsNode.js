let a = 3   // uma variavel local e não global

globalThis.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(modulo.exports.c)
console.log(modulo.exports === this)
console.log(modulo.exports)

// criando um variavel maluca: sem var e let!
abc = 3 // não faça isso em casa!!!
console.log(global.abc)

//modulo.exports = { e: 456, f: false, g: 'teste'}