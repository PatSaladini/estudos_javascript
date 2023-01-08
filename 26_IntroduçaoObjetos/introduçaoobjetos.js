// o que sao objetos ?
// Chave-Valor (Key Value pair)
// trabalhando com celular por exemplo

let marcaCelular = 'LG';
let tamanhoTelaVertical = 155;
let tamanhoTelaHorizontal = 75;
let capacidadeBateria = 5000;

// essas sao varias propriedades de um objeto
// o objetivo é juntar todas em apenas um local

const celular = {
    marcaCelular : 'LG',
    tamanhoTela : {
        vertical : 155,
        horizontal : 75
    },
    capacidadeBateria : 5000,
    ligar: function() {
        console.log('Fazendo ligação...')
    }
}
celular.capacidadeBateria = 10;
console.log(celular.capacidadeBateria);
celular.ligar(); // esse é o metodo 

