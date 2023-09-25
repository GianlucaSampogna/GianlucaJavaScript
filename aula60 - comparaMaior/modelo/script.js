function maior(){
    num1 = document.querySelector('#num1')
    num2 = document.querySelector('#num2')
    return num1.value > num2.value ? num1.value : num2.value
}

function criaP(){
    let div = document.querySelector('#comparamaior')
    const p = document.createElement('p')
    p.id = 'res'
    div.appendChild(p)
}

function escreveP(msg){
    let res = document.querySelector('#res')
    res.innerHTML = msg
}

function realiza(){
    criaP()
    escreveP(maior())
}





