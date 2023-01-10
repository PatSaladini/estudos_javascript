// Arrow functions (funçao de setas)

const marcas = [
    {id:1, nome: 'a'},
    {id:2, nome: 'b'}
]

// console.log(marcas.find(function(marca) {
//   return marca.nome === 'a';
// }))

// maneira mais facil de fazer 

console.log(marcas.find(marca => marca.nome === 'a'))

 // utiliza a => (seta) no lugar do function e o resultado sera o mesmo e remove os ()do function
 // quando estiver utilizando apenas um parametro 
 // remove tb as chaves e o return e deixa apenas o parametro 

 // se nao houver paramentros utilizar () - nesse exemplo, substituiria o marca por () na ausencia 
 // de parametros 