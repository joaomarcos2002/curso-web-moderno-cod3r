const pilotos = ['Vettel', 'Alonso', 'Raikkomen', 'Massa']
pilotos.pop()   // remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen')  // Adicona na última posição do array mais um elemento
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array 
console.log(pilotos)

pilotos.unshift('Hamilton') // Adicionar um elemento na primeira posição do array
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2,0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3,1) // removendo o terceiro elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.splice(2)    // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.splice(1, 4)
console.log(algunsPilotos2)