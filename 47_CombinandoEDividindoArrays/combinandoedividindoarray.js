// Combinando e dividindo Array

const primeiro = [1,2,3]
const segundo = [4,5,6]

// 1º - juntando os Arrays - combinando eles através do método CONCAT (concatenar)
const combinado = primeiro.concat(segundo)
console.log(combinado)

// para dividir o array utilizar o metodo SlICE
const cortado = combinado.slice(1,3)
console.log(cortado)
// passar o indice inicial e final e ele ira extrair os valores 
// ele nunca extrai o ultimo numero, vai do primeiro menos o ultimo (primeiro -1)
// se colocar só o 1 ele irá extrair o 2,3,4,5,6
// se utilizar () ele irá extrair 1,2,3,4,5,6
// está se trabalhando com numeros primitivos se for OBJETO ele irá trabalhar com a referencia (id) 

