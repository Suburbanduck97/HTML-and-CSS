const kg = document.querySelector('#peso')
const cm = document.querySelector('#altura')
const calcular = document.querySelector('#calcular')
const mensagem = document.querySelector('#mensagem')
const situacao = document.querySelector('#situacao')

calcular.addEventListener('click', imc)

function imc(){
    p = Number(kg.value)
    a = Number(cm.value)

    valor_imc = p / (a * a)

    if (valor_imc < 18.5){
        msgm = 'Abaixo do Peso'
    }
    else if (valor_imc >= 18.5 & valor_imc <= 25){
        msgm = 'Peso Normal'
    }
    else if (valor_imc >= 26 & valor_imc <= 30){
        msgm = 'Acima do Peso' 
    }
    else{
        msgm = 'Obesidade'
    }

    mensagem.textContent = `IMC: ${valor_imc.toFixed(1)}`
    situacao.textContent = `Classificação: ${msgm}`
}