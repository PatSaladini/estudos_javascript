// Removendo parametros (elementos) do Array

// ARRAY utilizar []

const numeros = [1,2,3,4,5,6]

// remover no FINAL - numeros.pop()
const ultimo = numeros.pop()
console.log(ultimo)
console.log(numeros)

// remover no INICIO - numeros.shift()
const primeiro = numeros.shift()
console.log(primeiro)
console.log(numeros)

// remover no MEIO - numeros.splice()
const meio = numeros.splice(2,1)
console.log(meio)

// nesse exemplo será retirado o numero 1, que ocupa a posiçao 2 e será retirado apenas uma x
// por isso o (2,1)