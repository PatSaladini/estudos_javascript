// encontrando elementos primitivos 

// const numeros = [1,2,3,4]
// console.log(numeros.indexOf(2)) // considerando que a contagem inicia no 0 ele deve retornar o numero 1

// const numeros = [1,2,3,4]
// console.log(numeros.indexOf(5)) // retorna -1 pq nao encontrou o numero o 5 dentro do array // retorna -1 pq nao encontrou o numero o 5 dentro do array

// const numeros = [1,2,3,4]
// console.log(numeros.indexOf('1')) // retorna -1 pq nao é uma string ''

// lastIndexoff - encontra a ultima ocorrencia do valor colocado

// const numeros = [1,2,3,1,4]
// console.log(numeros.indexOf(1)) // ira retorna 3 pq vera q a ultima ocorrencia foi na posicao 3 

const numeros = [1,2,3,1,4]
console.log(numeros.indexOf(2) !== -1)  // !== é igual a diferente 
// retorna true 
// retorna TRUE pq o -1 nao existe 

console.log(numeros.includes(2)) // esse é o jeito mais simples de se fazer 