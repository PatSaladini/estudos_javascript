//valor dividivel por 3 retorna fizz
//valor divisivelpor 5 retorna buzz
//valor divisivel por 3 e 5 retorna fizzBuzz
//nao e divisivel nem por 3 e nem por 5 retorna a mensagem 'Nao e um numero'
//se utilizar string etc retorna a mensagem 'Nao e um numero'

//const resultado = fizzBuzz(3);
//console.log(resultado);

//function fizzBuzz(entrada) {
//}


// para testar onde esta 3 voxê deve colocar números divisiveis por 3 e 5 para ver a resposta 
//no console
// usando numeros nao divisiveis por 3 e 5 ele retorna o numero colocado
const resultado = fizzBuzz(3);
console.log(resultado);

function fizzBuzz(entrada){
    if ( typeof entrada !== 'nunber')
        return 'Não é um número!';
     if ((entrada % 3 === 0 && entrada % 5 === 0))
        return 'FizzBuzz'; 
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
     return entrada;
}