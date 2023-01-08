// criar funçao para mostrar numeros primos

// primos
// compostos 

//Ex: 10, 11
// numero primo é aquele que é divisivel apenas po 1 ou por ele mesmo
// 10 nao e um numero primo pq pode ser dividido por 1, 2, 4, 6, 10
// 11 é numero primo pq só se divide por 1 e por ele mesmo

exibirNumerosPrimos(15);

//function exibirNumerosPrimos(limite) {
    //for (let numero = 2; numero <= limite; numero++) {
       // let ehPrimo = true;

      //  for(let divisor = 2; divisor < numero; divisor++){
          //  if(numero % divisor === 0) {
              //  ehPrimo = false;
              //  break;
         //   }
      //  }

      //  if (ehPrimo) console.log(numero);
   // }

   // CODIGO MAIS CLEAN

   function exibirNumerosPrimos(limite) {
    for (let numero = 2; numero <= limite; numero++) {
        if (NumeroPrimo(numero)) console.log(numero);
    }
}

function NumeroPrimo(numero) {
    for (let divisor = 2; divisor < numero; divisor++){
        if(numero % divisor === 0) {
            return false;
        }
    }
    return true;
}