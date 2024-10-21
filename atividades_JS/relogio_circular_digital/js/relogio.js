//DOM
const horas = document.querySelector('#hours')
const minutos = document.querySelector('#minutes')
const segundos = document.querySelector('#seconds')

setInterval(relogio, 1000)

function relogio(){
    let actually = new Date()
    let h = actually.getHours()
    let m = actually.getMinutes()
    let s = actually.getSeconds()

    if (h < 10){
        h = "0" + h
    }
    if (m < 10){
        m = "0" + m
    }
    if (s < 10){
        s = "0" + s
    }

    hours.textContent = h
    minutes.textContent = m
    seconds.textContent = s
}

