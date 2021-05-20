const divUm = document.getElementById('divUm');

const resetText = (event) => {
  event.target.innerText = 'Opção reiniciada';
};

divUm.addEventListener('dblclick', resetText);