const carrinho = [
    `{ "nome": "Borracha", "preco": 3.45 }`,
    `{ "nome": "Caderno", "preco": 13.90 }`,
    `{ "nome": "kit de Lapis", "preco": 41.22 }`,
    `{ "nome": "Caneta", "preco": 7.50 }`
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apanasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apanasPreco)
console.log(resultado)