//DOM
const personagem = document.querySelector('#personagem')
const raiva = document.querySelector('#raiva')
const nojinho = document.querySelector('#nojo')
const tristeza = document.querySelector('#tristeza')
const alegria = document.querySelector('#alegria')

const horas = document.querySelector('#hora')
const minutos = document.querySelector('#minuto')
const segundos = document.querySelector('#segundo')

//EVENTO
raiva.addEventListener('click', angry)
nojinho.addEventListener('click', eca)
tristeza.addEventListener('click', sad)
alegria.addEventListener('click', happy)

setInterval(ocloock, 1000)


//FUNÇÃO

function ocloock(){
    let tempo = new Date()
    let h = tempo.getHours()
    let m = tempo.getMinutes()
    let s = tempo.getSeconds()

    if (h < 10){
        h = "0" + h
    }
    if (m < 10){
        m = "0" + m
    }
    if (s < 10){
        s = "0" + s
    }

    horas.textContent = h
    minutos.textContent = m
    segundos.textContent = s
}




function angry(){
    personagem.src='images/raiva.png'
}
function eca(){
    personagem.src='images/nojinho.png'
}
function sad(){
    personagem.src='images/tristeza.png'
}
function happy(){
    personagem.src='images/alegria.png'
}