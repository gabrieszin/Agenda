import criarBotaoConcluiTarefa from './mod-tarefas/concluir-tarefa.js';
import criarBotaoApagarTarefa from './mod-tarefas/apagar-tarefa.js';

(() => {

const criarTarefa = (evento) => {
  evento.preventDefault();

  const lista = document.querySelector('[data-list]');
  const inputNovaTarefa = document.querySelector('[data-form-input]');
  
  let nomeNovaTarefa = (inputNovaTarefa.value);
  nomeNovaTarefa = `#${nomeNovaTarefa}`;
  inputNovaTarefa.value = "";

  // #Criando o Elemento LI para a NOVA TAREFA e o alimentando com um valor recebido do INPUT
  let tarefa = document.createElement('li');
  tarefa.classList.add('task');
  tarefa.setAttribute('data-task', '');

  const conteudoAdicionarTarefa = `<p class="content">${nomeNovaTarefa}</p>`;

  tarefa.innerHTML = conteudoAdicionarTarefa;
  tarefa.appendChild(criarBotaoConcluiTarefa());
  tarefa.appendChild(criarBotaoApagarTarefa());

  lista.appendChild(tarefa);
}

const botaoFormulario = document.querySelector('[data-form-button]');

botaoFormulario.addEventListener('click', criarTarefa)

})();