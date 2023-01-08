// for
// while
// do-while

// for-in

const pessoa = {
    nome: 'João',
    idade: 25
};
// key-value - nome é o key e idade é o value
for(let chave in pessoa) {
    console.log(chave,pessoa['nome']);
}

const cores = ['Vermelho','Azul','Verde'];

for (let indice in cores) {
    console.log(indice, cores [indice])
} 

// for-of