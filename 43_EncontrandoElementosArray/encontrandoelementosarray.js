// Encontrabdo elementos array (tipos de referencia)
// tipos primitivos JS: Boolean, Null, Undefined, Number, BigInt, String
// tipos referencia JS: Undefined, Null, Boolean, String e Number

// FIND retorna o valor do primeiro elemento do array que satifaz a condiçao que foi passada, 
// senao ele retorna um UNDEFINED 

const marcas = [
    {id:1, nome: 'a'},
    {id:1, nome: 'b'},
    
]

const marca = marcas.find(function(marca){
    return marca.nome === 'a'
})

console.log(marca)