//Explicacao rapida
//Queremos manipular os objetos da DOM
//No momento estamos interessados em fazer a classe modal-overlay aparecer ou desaparecer
//Para tanto, precisamos criar uma variável do tipo const para inicialmente selecionar o objeto
//que queremos manipular. Este objeto está inserido no nosso document(nossa pagina)
//querySelector vai pegar aquilo que eu passar como parametro para ele, no caso o nosso modal-overlay
//o . indica que é a classe
//o querySelector é responsável por pegar qualquer seletor que eu passar por parametro

const modalOverlay = document.querySelector('.modal-overlay')

//Selecionada a classe que contém os cartoes, agora eu preciso selecionar todos os cartoes
//Assim, agora uso o querySelectorAll para pegar todos os elementos cuja classe é card
const cards = document.querySelectorAll('.card')

//Agora eu preciso que ao clicar em cada cartao, ele inicie o video no meu modal
// A ideia do click deve ser colocada em cada cartao que foi armazenado em cards.
//Para tanto, basta usar um loop

for(let card of cards) {

    card.addEventListener("click", function() {
        var videoId = card.getAttribute("id")//pegando o atributo id do card para usar como endereco do video
        modalOverlay.classList.add('active')//adicionando classe active para o modal poder ser aberto
        modalOverlay.querySelector("video").src = `${videoId}`//iframe//to adicionando o endereco do video de forma dinamica

   })

}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')//Removendo a classe active para sumir com o modal quando eu fechar
    modalOverlay.querySelector("video").src = ""//Aqui eu estou fazendo com q o video pare na hora que eu fechar
})


