// Date 
// utilizado para datas
// quando se utiliza () no console ele tras a data atual 
// existem varias formas de fazer a data - consultar Mozilla
// lembrando que os meses do ano a contagem começa no zero - janeiro é o mes 0
// utilizar o get para extrais informações 
// utilizar o set para alterar valores 

const data1 = new Date();
console.log(data1);

const data2 = new Date('March 06 2019 09:30')
console.log(data2)

const data3 = new Date(2019,03,09,10,40)
console.log(data3)

// setFullYear utilizado para alterar o ano 
data3.setFullYear(2030)
console.log(data3)

// conversao de objeto data para string
// o metodo mais comum é o toDateString 
// toTimeString inclui informaçoes de tempo local 

data1.toDateString();
console.log(data1);

