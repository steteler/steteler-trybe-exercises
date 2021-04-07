const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
elementoOndeVoceEsta.parentElement.style.color = 'red';

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerText = 'Teste';

const pai = document.getElementById('pai');
console.log(pai.firstElementChild);

console.log(elementoOndeVoceEsta.previousElementSibling);

console.log(elementoOndeVoceEsta.nextSibling);

console.log(elementoOndeVoceEsta.nextElementSibling);

console.log(pai.childNodes[5]);