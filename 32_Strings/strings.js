// Metodos de um String

// Tipo primitivo
const mensagem = 'minha primeira mensagem';

// Tipo objeto
const outraMensagem = new String('bom dia');

// Mozilla para entender melhor cada um deles

// console 

typeof mensagem
console.log(typeof mensagem)
//"string"

typeof outraMensagem
console.log(typeof outraMensagem);
//"object"

outraMensagem.length
console.log(outraMensagem.length);
//7

outraMensagem[2]
console.log(outraMensagem[2]);
//"m"

mensagem.includes('primeira')
console.log(mensagem.includes('primeira'));
//true

mensagem.includes('red')
console.log(mensagem.includes('red'));
//false

mensagem.startsWith('minha')
console.log(mensagem.startsWith('minha'));
//true

mensagem.startsWith('verde')
console.log(mensagem.startsWith('verde'));
//false

mensagem.endsWith('mensagem')
console.log(mensagem.endsWith('mensagem'));
//true

mensagem.indexOf('primeira')
console.log(mensagem.indexOf('primeira'));
//6

mensagem.replace('minha','sua')
console.log(mensagem.replace('minha', 'sua'));
//'sua primeira mensagem'  //trocou a palavra 

mensagem.trim()
console.log(mensagem.trim());
//'minha primiera mensagem' // tira os espaços a mais da mensagem 

mensagem.split(' ');
console.log(mensagem.split(' '));
//(5) ["", "minha", "primeira", "mensagem", ""]
//0: ""
//1: "minha"
//2: "primeira"
//3: "mensagem"
//4: ""
//length: 5