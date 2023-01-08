// Add elementos a um Array

const numeros = [1,2,3] //add elementos so array

// numeros é um array mas tb é um objeto que tem varios metodos e propriedades 

// Inserir:
// Inicio - add numero - UNSHIFT
numeros.unshift(0)
console.log(numeros)

// Meio - determina a posicao que ira iniciar - SPLICE
numeros.splice(1,0,'a') // o 0 é colcoado p informar que nao quer deletar nada
console.log(numeros)

// Final - acrescenta - PUSH
numeros.push(5)
console.log(numeros)
