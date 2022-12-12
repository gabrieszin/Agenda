const criarBotaoApagarTarefa = () => {
  
  let botaoApagar = document.createElement('button');
  botaoApagar.classList.add('delete-button');
  botaoApagar.setAttribute('data-button-apagar', '');
  botaoApagar.innerText = 'Apagar';

  botaoApagar.addEventListener('click', apagarTarefa);

  return botaoApagar;
}

const apagarTarefa = (evento) => {

  const botaoApagar = evento.target;
  const lista = botaoApagar.parentElement;

  lista.remove();
}

export default criarBotaoApagarTarefa;