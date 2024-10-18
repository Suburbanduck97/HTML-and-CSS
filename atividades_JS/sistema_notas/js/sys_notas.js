//DOM
const unidade1 = document.querySelector('#unidade1')
const unidade2 = document.querySelector('#unidade2')
const unidade3 = document.querySelector('#unidade3')
const botao = document.querySelector('#calcular')
const resultado = document.querySelector('#resposta')

//EVENTO
botao.addEventListener('click', calculo)

//FUNÇÃO
function calculo(){
    nota1 = Number(unidade1.value)
    nota2 = Number(unidade2.value)
    nota3 = Number(unidade3.value)

    media = (nota1 + nota2 + nota3) / 3

    if (media >= 5){
        mensagem = 'aprovado!'
    }
    else if (media <= 5 & media > 3){
        mensagem = 'em recuperação!'
    }
    else if (media <= 3){
        mensagem = 'reprovado!'
    }

    resultado.textContent = `A sua média foi ${media.toFixed(1)}, Você está ${mensagem}`
}