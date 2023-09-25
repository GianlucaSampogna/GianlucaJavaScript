const cpfBruto = document.querySelector('.cpf')
const enviar = document.querySelector('.enviar')
const container = document.querySelector('.container')
criaP()

enviar.addEventListener('click', function(e){
    let cpf = cpfBruto.value
    escreveTxt(validaCpf(cpfLimpo(cpf)))
})

document.addEventListener('keypress', function(e){
    if(e.keyCode == 13){
        let cpf = cpfBruto.value
        escreveTxt(validaCpf(cpfLimpo(cpf)))
    }
})

const cpfLimpo = (cpf => cpf.toString().replace(/\D+/g, ''))
const transformaArray = (str => Array.from(str))

function validaCpf(cpfstr){
    let cpf = transformaArray(cpfstr)

    let multiplicador = 10
    let acumulador = 0
    for(let num of cpf.slice(0,-2)){
        acumulador += multiplicador*num
        multiplicador = multiplicador-1
    }
    const digito1 =  11 - (acumulador%11) == 10 ? 0 : 11 - (acumulador%11)
    const comparadord1 = digito1 == cpf[9]
    
    multiplicador = 11
    acumulador = 0
    for(let num of cpf.slice(0,-1)){
        acumulador += multiplicador*num
        multiplicador = multiplicador-1

    }
    const digito2 =  11 - (acumulador%11) == 10 ? 0 : 11 - (acumulador%11)
    const comparadord2 = digito2 == cpf[10]

    return (comparadord1 && comparadord2)
}

function criaP(){
    let p = document.createElement('p')
    p.className = 'res'
    container.appendChild(p)
}

function escreveTxt(bool){
    let p = document.querySelector('.res')
    
    if (bool){
        p.innerHTML = 'CPF válido'
    }else{
        p.innerHTML = 'CPF inválido'
    }
}



