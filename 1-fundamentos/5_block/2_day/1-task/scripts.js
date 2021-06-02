// Exercicio 1
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// Exercicio 2
elementoOndeVoceEsta.parentElement.style.color = 'red';

// Exercicio 3
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');

primeiroFilhoDoFilho.innerText = 'Teste';

// Exercicio 4
const pai = document.getElementById('pai');
console.log(pai.firstElementChild);

// Exercicio 5
console.log(elementoOndeVoceEsta.previousElementSibling);

// Exercicio 6
console.log(elementoOndeVoceEsta.nextSibling);

// Exercicio 7
console.log(elementoOndeVoceEsta.nextElementSibling);

// Exercicio 8
console.log(pai.childNodes[5]);