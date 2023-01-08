//velocidade maxima de 70
//a cada 5km acima do limite voce ganha 1 ponto
//utilizar a funcao Math.Floor() JS para arredondar os valores desse mais 
//caso os pontos sejam maiores de 12 "Carteira Suspendida!"
verificarVelocidade(130);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMaxima)
    console.log('OK');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
        if( pontos >= 12)
        console.log('Carteira Suspensa!');
        else 
        console.log('Pontos',pontos);
    }
}
