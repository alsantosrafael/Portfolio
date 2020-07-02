//Iniciando meu servidor:
//crio uma variavel que vai chamar (comando require) a dependência "express"

const express = require('express')

//Queremos agora utilizar o conceito de template engine
//Para tanto, instalamos o nunjucks, o motor dessas engine
//Agora iremos chamar a engine instalada
const nunjucks = require('nunjucks')

//Criando o servidor
//Crio uma variável chamando a variável que criei anteriormente

const server = express()
/*Chamando array que contém meus projetos nos cards*/
const projects = require("./data")

//Configurando os estilos do site
server.use(express.static('public'))
//Escolhendo nossa view engine ou seja nosso motor de view

server.set("view engine", "njk")
//configurando com nunjucks
nunjucks.configure("views", {
    express: server,
    autoescape: false, // Função responsável por manter links html a disposição no nunjucks
    noCache: true // Responsável por eliminar cache!Essencial para condicionais de classe darem certo no html.
})

//Preciso criar uma rota para que o servidor encontre aquilo que ele vai mostrar
//Aquilo que ele vai mostrar é minha rota principal, isto é a barra / (index da minha pagina)
//Para tanto, uso o método get, passo como parametro a / e crio uma função callback
//Vou passar como parâmetro para essa função os objetos req(requisição do usuário) e res (resposta do meu server)
//Quando o usuário requisitar algo, responda com algo

server.get("/", function(req, res) {
    //Deixando meu portfolio dinamico e passando ele do frontend para o backend
    const about = {
        avatar_url: "https://avatars2.githubusercontent.com/u/60659321?s=400&u=dc5d8004ad479266113f795643fcc67e59c3a05d&v=4",
        name: "Rafael Almeida",
        education: "MBA em Engenharia de Software | Desenvolvedor Fullstack | Engenheiro Eletricista",
        abstract:"Profissional focado em solução de problemas com excelência e criatividade.",

        social: [
            {name: "Github", url: "https://github.com/alsantosrafael"},
            {name:"LinkedIn", url:"https://www.linkedin.com/in/rafaalms/"}
        ]
    
    }

    return res.render("about", {about}) //about : about

})

server.get("/portfolio", function(req, res) {
    return res.render("portfolio", { items: projects })

})
//Iniciando o servidor
//Chamo o método listen e passo como parametro uma porta uma função de callback
server.listen(5000, function() {
    //vou executar minha callback assim que meu server for iniciado
    console.log("Server is running!")
    //Posso dar start no nosso servidor escrevendo npm start

})