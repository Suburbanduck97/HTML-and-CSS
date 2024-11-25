//dom
const cidade = document.querySelector('.input-cidade')
const botao = document.querySelector('.botao-busca')
const texto_cidade = document.querySelector('.cidade')
const temperatura = document.querySelector('.temp')
const previsao = document.querySelector('.texto-previsao')
const key = '2c08257c3ce6b38bf59cf5928bb34882'

botao.addEventListener('click', buscar)


//função
async function buscar(){

    nome_cidade = cidade.value

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nome_cidade}&appid=${key}&units=metric&lang=pt-br`)
    .then(resposta=>resposta.json())

    console.log(dados)

}