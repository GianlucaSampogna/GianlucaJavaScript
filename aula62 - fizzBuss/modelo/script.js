function criaP(){
    let div = document.querySelector('#fizzbuss')
    const p = document.createElement('p')
    p.id = 'res'
    div.appendChild(p)
}

function escreveP(msg){
    let res = document.querySelector('#res')
    for(i=1;i<=100;i++){
        let msg = fizzBuss(i)
        res.innerHTML += msg + '</br>'
    }
    
}

function fizzBuss(num){
    if (num%3==0 && num%5==0) return 'FizzBuss'
    if(num%3==0) return 'Fizz'
    if(num%5==0) return 'Buss'
    return num
}

criaP()
escreveP(fizzBuss())
