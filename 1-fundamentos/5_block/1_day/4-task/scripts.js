// Exercício 1
const changeText = () => {
  document.getElementsByTagName('p')[1].innerHTML = 'Trabalhar com algo que goste';
};

// Exercício 2
const changeColorSquareOutside = () => {
  document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';
};

// Exercício 3
const changeColorSquareInside = () => {
  document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
};

// Exercício 4
const changeTextTitle = () => {
  document.getElementsByTagName('h1')[0].innerHTML = 'Exercício 5.1 - JavaScript';
};

// Exercício 5
const changeAllPTexts = () => {
  const tagsP = document.getElementsByTagName('p');
  for (const index of tagsP) {
    index.innerHTML = index.innerHTML.toUpperCase();
  }
};

// Exercício 6
const showAllPContent = () => {
  console.log(document.getElementsByTagName('p'));
};

changeText();
changeColorSquareOutside();
changeColorSquareInside();
changeTextTitle();
changeAllPTexts();
showAllPContent();