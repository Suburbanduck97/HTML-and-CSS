//DOM
const astro = document.querySelector('#astros')
const saudacao = document.querySelector('#saudacao')
const fundo = document.querySelector('body')

//Periodo
const solar = document.querySelector('#solar')
const manha = document.querySelector('#manha')

//Data
const dia = document.querySelector('#dia')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')

//Time
const hora = document.querySelector('#horas')
const minuto = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

//EVENTOS
setInterval(relogio, 1000)
solar.addEvent(navigator)
manha.addEvent(navigator)

//FUNÇÃO
function relogio(){
    let horas_atuais = new Date()
    let h = horas_atuais.getHours()
    let m = horas_atuais.getMinutes()
    let s = horas_atuais.getSeconds()

    if (h < 10){
        h = "0" + h
    }
    if(m < 10){
        m = "0" + m
    }
    if (s < 10){
        s = "0" + s
    }

    if (h >= 18 && (h <= 23 && m <= 59)){
        astro.src='images/Lua_noite.png'
        mensagem = 'Boa Noite'
    }
    else if(h >= 0 && (h <= 4 && m <= 59)){
        astro.src='images/Lua_noite.png'
        mensagem = 'Boa Noite'
    }
    else if(h >= 5 && (h <= 6 && m <= 59)){
        astro.src='images/solNuvem_manha.png'
        mensagem = 'Bom Dia'
        fundo.className = 'manha'
    }
    else if(h >= 6 && (h <= 11 && m <= 59)){
        astro.src='images/sol_dia.png'
        mensagem = 'Bom Dia'
        fundo.className = 'solar'
    }
    else if(h >= 12 && (h <= 17 && m <= 59)){
        astro.src='images/sol_dia.png'
        mensagem = 'Boa Tarde'
        fundo.className = 'solar'
    }

    horas.textContent = h
    minutos.textContent = m
    segundos.textContent = s

    saudacao.textContent = `${mensagem}`

    let day = horas_atuais.getDay()
    let month = horas_atuais.getMonth()
    let year = horas_atuais.getFullYear()

    if (day < 10){
        day = "0" + day
    }
    if (month < 10){
        month = "0" + month
    }

    dia.textContent = day
    mes.textContent = month
    ano.textContent = year
}