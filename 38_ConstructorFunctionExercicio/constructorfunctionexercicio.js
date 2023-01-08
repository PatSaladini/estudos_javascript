// Constructor Function Exercicio

// criar um objeto postagem 
// titulo, mensagem, autor, visualizacao, comentarios, estaAoVivo

function Postagem(titulo,mensagem,autor,visualizacao,comentarios,estaAoVivo) {
    this.titulo = titulo,
    this.mensagem = mensagem, 
    this.autor = autor,
    this.visualizacao = 0,
    this.comentarios = []
    this.estaAoVivo = false
}


let postagem = new Postagem('a','b','c')
console.log(postagem)

