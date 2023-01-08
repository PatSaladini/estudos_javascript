const celular = {
    marcaCelular: 'ASUS',
    tamanhoTela: { 
        vertical: 155, 
        horiazontal: 75
    },
ligar: function() {
    console.log('Fazendo ligação ...');
    }
}

// dentro do {} vc pode adicionar propriedades
const novoObjeto = Object.assign({
    bateria: 5000
},celular);
console.log(novoObjeto);

// forma mais rapida de se fazer 
const objeto2 = {... celular};
console.log(objeto2);