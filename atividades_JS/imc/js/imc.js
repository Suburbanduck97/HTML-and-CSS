const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const calcular = document.querySelector('#calcular')
const mensagem = document.querySelector('#resultado')

calcular.addEventListener('click', calculando_imc)

function calculando_imc(){
    p = Number(peso.value)
    a = Number(altura.value)

    result = p / (a * a)

    if (result >= 19 & result <= 24){
        classificacao = 'Peso Ideal'
    }
    else if (result >= 25 & result <= 29){
        classificacao = 'Sobrepeso'
    }
    else if (result >= 30 & result <= 34){
        classificacao = 'Obesidade Grau 1'
    }
    else if (result >= 35 & result <= 39){
        classificacao = 'Obesidade Grau 2'
    }
    else if (result >= 40){
        classificacao = 'Obesidade Grau 3'
    }
    else{
        classificacao = 'Abaixo do Peso'
    }

    mensagem.textContent = `Classificação: ${classificacao}`
}