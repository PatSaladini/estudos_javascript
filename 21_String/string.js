// criar um metodo para ler propriedades de um objeto e 
// exibir somente as propriedades do tipo de string que estão nesse objeto

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor'
}
// exemplo 1
//exibirPropriedades(filme);
//function exibirPropriedades (obj) {
  // for (prop in obj) {
      //  if(typeof prop === 'string')
        // console.log(prop,obj[prop])
   //}
//}

// exemplo 2 com a exibição somente das propriedades 
exibirPropriedades(filme);
function exibirPropriedades (obj) {
   for (prop in obj) {
        if(typeof obj[prop] === 'string')
        console.log(prop,obj[prop])
   }
}