//DOM
const numeracao = document.querySelector('#numeracao')

//Números
const um = document.querySelector('#um')
const dois = document.querySelector('#dois')
const tres = document.querySelector('#tres')
const quatro = document.querySelector('#quatro')
const cinco = document.querySelector('#cinco')
const seis = document.querySelector('#seis')
const sete = document.querySelector('#sete')
const oito = document.querySelector('#oito')
const nove = document.querySelector('#nove')
const zero = document.querySelector('#zero')

//Botoes
const branco = document.querySelector('#branco')
const corrige = document.querySelector('#laranja')
const confirma = document.querySelector('#verde')

//Imagem
const foto = document.querySelector('#candidato')

um.addEventListener('dblclick', valor1)
dois.addEventListener('click', valor2)
tres.addEventListener('click', valor3)
quatro.addEventListener('dblclick', valor4)
cinco.addEventListener('click', valor5)
seis.addEventListener('click', valor6)
sete.addEventListener('click', valor7)
oito.addEventListener('click', valor8)
nove.addEventListener('click', valor9)
zero.addEventListener('dblclick', valor0)

confirma.addEventListener('click', confirmacao)



function valor1(){
    foto.src='images/jessu.jpeg'
    return 1
}
function valor2(){
    return 2
}
function valor3(){
    return 3
}
function valor4(){
    foto.src='images/equire.jpeg'
    return 4
}
function valor5(){
    return 5
}
function valor6(){
    return 6
}
function valor7(){
    return 7
}
function valor8(){
    return 8
}
function valor9(){
    return 9
}
function valor0(){
    foto.src='images/silhueta.png'
    return 0
}

function confirmacao(){
    foto.src='images/fim_urna.png'
}
function branco(){
    foto.src='images/fim_urna.png'
}
function corrige(){
    foto.src='images/fim_urna.png'
}