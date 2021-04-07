//Exercicio 1
const pai = document.getElementById('pai');
const brotherElementoOndeVoceEsta = document.createElement('div');
pai.append(brotherElementoOndeVoceEsta);
//Exercicio 2
const child = document.createElement('div');
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
elementoOndeVoceEsta.append(child);
//Exercicio 3
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilho.append(child);
//Exercicio 4
child.parentElement.parentElement.nextElementSibling;