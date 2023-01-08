//If...Else (condicional)
// Switch ... case (condicional)

// Se a hora estiver entre 06:00 até 12:00 : Bom dia !
// Se estiver entre 12:00 e 18:00 : Boa noite !
// Caso contrário : Boa noite !

//if (condicao) {
    // codigo a ser executado
//}
//else if (condicao) {
    // codigo a ser executado 
//}
//else {
    // codigo a ser executado 
//}

let hora = 10;
if (hora > 6 && hora < 12) {
    console.log('Bom dia !');
}
else if (hora > 12 && hora < 18) {
    console.log('Boa tarde !');
}
else {
    console.log('Boa noite !');
}