// Objeto de postagem de blog 
// nome do objeto = postagem 
/*
 titulo
 mensagem
 autor
 visualizações
 comentario 
    (autor, mensagem) estaAoVivo
*/

let postagem = {
    titulo : 'a',
    mensagem : 'b',
    autor : 'c',
    visualizações : 10, 
    comentários : [
        {autor: 'a',mensagem: 'b'},
        {autor: 'a',mensagem: 'b'}
    ],
    estaAoVivo : true
}

console.log(postagem)