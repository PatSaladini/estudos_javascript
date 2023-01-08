// criar funçao somar que retorna a
// soma de todos os multiplos de 3 e 5 
// saber os multiplos de 3 e 5 
// trabalhar dentro de um limite 

// multiplos de 3 dentro de 10 = 3,6,9
// multiplos de 5 dentro de 10 = 5,10
// resultado = 33 devido a soma dos multiplos 

// dica
// armazenar os multiplos de 3
// armazenar os multiplos de 5
// somar os dois

// começar fazendo LOOP


somar(10);
function somar(limite) {
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;
    for(i=0;i <= limite;i++) {
        if(i % 3 === 0)
        multiplosDe3 += i;
        if(i % 5 === 0)
        multiplosDe3 += i;
    }
    console.log(multiplosDe3 + multiplosDe5);
}
