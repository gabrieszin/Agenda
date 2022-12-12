const criarBotaoConcluiTarefa = () => {

  let botaoConclui = document.createElement('button');
  botaoConclui.classList.add('check-button');
  botaoConclui.setAttribute('data-button-concluir', '');
  botaoConclui.textContent = 'Concluir';

  botaoConclui.addEventListener('click', concluirTarefa);

  return botaoConclui;
}

const concluirTarefa = (evento) => {

  const botaoConcluir = evento.target;
  const tarefa = botaoConcluir.parentElement;

  tarefa.classList.toggle('done');
}

export default criarBotaoConcluiTarefa;