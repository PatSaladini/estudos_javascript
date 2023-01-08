// EXEMPLO FACTORY FUNCTION 
// Camel Case - umDois (segunda e demais letras da palavra em maiúsculo)
//function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria) {
  //  return { 
    //    marcaCelular,
      //  tamanhoTela,
        // capacidadeBateria,
        // ligar() {
           // console.log('Fazendo ligação...')
       // }
   // }
// }


// EXEMPLO CONSTRUCTOR FUNCTIONS
// Pascal Case - UmDoisTresQuatro (a primeira letra da palavra sempre está em maiúsculo)
function Celular(marcaCelular,tamanhoTela,capacidadeBateria) {
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function() {
        console.log('Fazendo ligação ...')
    }
}

const celular = new Celular('asus',5.5,5000);
console.log(celular);