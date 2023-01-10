// Operador Spread - cópias e clonagens de Arrays em JS 

const primeiro = [1,2,3]
const segundo = [4,5,6]

// const combinado = primeiro.concat(segundo)
// const cortado = combinado.slice()

// maneira nova de se fazer, mais intuitiva e simples - OPERADOR SPREAD (...)
const combinado = [...primeiro,...segundo]
console.log(combinado)
const cortado = combinado.slice()

const clonado = [...combinado]
console.log(clonado)
