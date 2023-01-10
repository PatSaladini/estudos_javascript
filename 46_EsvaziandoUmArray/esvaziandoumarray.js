// Esvaziando um Array 
// Existem varias soluçoes possiveis 

// troca-se a const por let p permitir q seja reatribuido, pois a const n permiti isso

let numeros = [1,2,3,4,5,6]
let outros = numeros 

// soluçao 1 - só apagará essa, se houver outra referencia ela n irá ser apagada, como é o caso
// do let outros
numeros = []

// soluçao 2 - nesse caso utilizando o lenght todos serao apagados 
// ESSE É O MAIS INDICADO - MAIS SIMPLES E MAIS EFICIENTE 
numeros.length = 0 
console.log(numeros)
console.log(outros)

// soluçao 3 - usa-se o LENGHT pq ele sabe a quantidade de objetos a serem apagados, 
// caso vc nao saiba 
numeros.splice(0,numeros,length)
console.log(numeros)
console.log(outros)

//soluçao 4 - utiliza o POP, mas só está indicada para base de dados bem pequena, pois demora 
// muito tempo para excluir todos os objetos
while (numeros.length > 0)
    numeros.pop

