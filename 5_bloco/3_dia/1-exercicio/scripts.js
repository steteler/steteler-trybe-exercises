const divUm = document.getElementById('divUm');

function resetText(event) {
  event.target.innerText = 'Opção reiniciada';
}

divUm.addEventListener('dblclick', resetText);