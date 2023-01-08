// Natureza Dinamica de Objetos 
const mouse = {
    cor : 'red',
    marca : 'dazz'
}
mouse.velocidade = 5000;
mouse.trocarDPI = function() {
    console.log=('mudando DPI');
}
console.log(mouse);

// pode acrescentar function
// pode deletar propriedade 
// ex: delete mouse.velocidade; .......... isso fará com que desapareça a propriedade