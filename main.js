const form = document.getElementById('to-do-list');
const newTask = document.getElementById('new-task');
const botaoAdicionar = document.getElementById('botao-adicionar');
const nomeTarefa = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addTask();    
    atualizaTabela();
}) 

function addTask () {
    if(nomeTarefa.includes(newTask.value)){
        alert(`a tarefa ${newTask.value} já foi inserida!`);
    } else { 
    nomeTarefa.push(newTask.value);
    linha += `<li> ${newTask.value} </li>`
    linhas += linha;
    }

    newTask.value = '';
}

function atualizaTabela(){
    const tabela = document.querySelector('ul');
    tabela.innerHTML = linhas;
}

tabela.addEventListener('click', function (e) {
    if(e.target.classList.contains('checked')){
        e.target.classList.remove('ckecked');
    }else{
        e.target.classList.add('checked');
    }
});


