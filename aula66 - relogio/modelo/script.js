function relogio(){
    const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.parar')
const zerar = document.querySelector('.zerar')

function formataData(segundos){
    const data = new Date(segundos*1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

let segundos = 0
let timer

function iniciarelogio (){
     timer = setInterval(function (){
        segundos++
        relogio.innerHTML = formataData(segundos)
        console.log(segundos)
    }, 1000)
}

iniciar.addEventListener('click', function(e){
    relogio.classList.remove('pausado')
    clearInterval(timer)
    iniciarelogio()
})

pausar.addEventListener('click', function(e){
    clearInterval(timer)
    relogio.classList.add('pausado')
})

zerar.addEventListener('click', function(e){
    clearInterval(timer)
    relogio.classList.remove('pausado')
    segundos = 0
    relogio.innerHTML = '00:00:00'
})}

relogio()



