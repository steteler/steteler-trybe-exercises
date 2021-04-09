changeText();
changeColorSquareOutside();
changeColorSquareInside();
changeTextTitle();
changeAllPTexts();

function changeText() {
  let teste = document.getElementsByTagName('p')[1];teste.innerHTML = "Trabalhar com algo que goste";
}

function changeColorSquareOutside() {
  document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';
}

function changeColorSquareInside() {
  document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
}

function changeTextTitle() {
  let title = document.getElementsByClassName('title')[0];

  title.innerHTML = title.innerHTML.toUpperCase();
}

function changeAllPTexts() {
  let tagsP = document.getElementsByTagName('p');
  for (let index in tagsP) {
    tagsP[index].innerHTML = tagsP[index].innerHTML.toUpperCase();
  }
}

    /*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie uma função que mude a cor do quadrado vermelho para branco.
4. Crie uma função que corrija o texto da tag <h1>.
5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/