// Foreach 

const numeros = [1,2,3,4,5]

 for (numero of numeros)
 console.log(numero)

// outro metodo forEach - tem que declarar uma funçao 
 numeros.forEach(function(numero) {
    console.log(numero)
})

// ou entao: 
numeros.forEach((numero) => console.log(numero))

// adicionando indice 
numeros.forEach((numero,indice) => console.log(numero,indice))
// o indice indica a posiçao do numero partindo do principio que a contagem inicia em o
// e o 1 é a posiçao 0