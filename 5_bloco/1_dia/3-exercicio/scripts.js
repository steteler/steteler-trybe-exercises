changeText();
changeColorSquareOutside();
changeColorSquareInside();
changeTextTitle();
changeAllPTexts();
showAllPContent();
//Exercício 1
function changeText() {
  document.getElementsByTagName('p')[1].innerHTML = "Trabalhar com algo que goste";
}
//Exercício 2
function changeColorSquareOutside() {
  document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';
}
//Exercício 3
function changeColorSquareInside() {
  document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
}
//Exercício 4
function changeTextTitle() {
  document.getElementsByTagName('h1')[0].innerHTML = "Exercício 5.1 - JavaScript";
}
//Exercício 5
function changeAllPTexts() {
  let tagsP = document.getElementsByTagName('p');
  for (let index of tagsP) {
    index.innerHTML = index.innerHTML.toUpperCase();
  }
}
//Exercício 6
function showAllPContent() {
  console.log(document.getElementsByTagName('p'));
}