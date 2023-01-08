// False 

//underfined
//null
//0
//false
// '  ' 
//NaN (not a number)

// Truthy 

//let corPersonalizada = 'Vermelho';
//let corPadrao = 'Azul';
//let corPerfil = corPersonalizada || corPadrao;

//console.log(corPerfil);

// Retorna Vermelho  (encontrou o valor Truthy que é a cor personalizada)

//retorna o vermelho pq já está preenchido, por isso que não retornou o azul, pegou 1º elemento

let corPersonalizada = '';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);


// retorna Azul pq encontrou uma string vazia primeiro que é uma valor FALSY
