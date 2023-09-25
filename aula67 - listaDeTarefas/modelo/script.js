const inputTarefa = document.querySelector('.input-nova-tarefa')
const btnAddTarefa = document.querySelector('.btn-add-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi(){
    const li = document.createElement('li')
    return li
}

function criatarefa(texto){
    const li = criaLi()
    li.innerHTML = texto
    tarefas.appendChild(li)
    criaBtnApagar(li)
}

function limpaInput(){
    inputTarefa.value = ''
    inputTarefa.focus()
}

function criaBtnApagar(li){
    li.innerHTML += '  '
    const btnApagar = document.createElement('button')
    btnApagar.innerHTML = 'Apagar'
    btnApagar.setAttribute('class', 'apagar')
    li.appendChild(btnApagar)
}

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []
    for (tarefa of liTarefas){
        let tarefatexto = tarefa.innerText
        tarefatexto = tarefatexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefatexto)
    }
    
    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

function addTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)
    for (let tarefa of listaDeTarefas){
        criatarefa(tarefa)
    }
}

document.addEventListener('click', function(e){
    const el = e.target
    if(el.classList.contains('apagar')){
        el.parentElement.remove()
        salvarTarefas()
    }
})

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return
        criatarefa(inputTarefa.value)
        limpaInput()
        salvarTarefas()
    }
})

btnAddTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return
    criatarefa(inputTarefa.value)
    limpaInput()
    salvarTarefas()
})

addTarefasSalvas()