// Faixa de Preco Exercicio 
/* criar Array de objeto de faixa de precos para que possa ser
 utilizado em site do tipo mercado livre */
/* nome do array de objetos sera faixas e tera que ter 3 propriedades tootip(mensagem de dica), 
valor minimo, valor maximo */

// Primeira opcao criar um array de objetos 
let faixas = [
    {tootip: 'até R$700', minimo: 0, maximo: 700},
    {tootip: 'de R$700 a R$1000', minimo: 700, maximo: 1000},
    {tootip: 'de R$1000', minimo: 1000, maximo: 9999}
]


// Segunda opcao utilizar Factory Functio
function criaFaixaPreco(tootip,minimo,maximo) {
    return {
        tootip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixaPreco('a',1,100),
    criaFaixaPreco('b',100,1000),
    criaFaixaPreco('c',1,10000)
]

// Terceira opcao Constructor Function

function FaixaPreco(tootip,minimo,maximo) {
    this.tootip = tootip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas3 = [
    new FaixaPreco('d',10,20),
    new FaixaPreco('e',20,30),
    new FaixaPreco('f',30,40)
]

console.log(faixas)
console.log(faixas2)
console.log(faixas3)
