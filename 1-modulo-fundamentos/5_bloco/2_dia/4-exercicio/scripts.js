// Exercicio 1
const h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';

document.body.appendChild(h1);
// Exercicio 2
const divMain = document.createElement('div');
divMain.className = 'main-content';
document.body.appendChild(divMain);
// Exercicio 3
const divCenter = document.createElement('div');
divCenter.className = 'center-content';
divMain.appendChild(divCenter);
// Exercicio 4
const p = document.createElement('p');
p.innerText = 'Algum texto';
divCenter.appendChild(p);
// Exercicio 5
const divLeftContent = document.createElement('div');
divLeftContent.className = 'left-content';
divMain.appendChild(divLeftContent);
// Exercicio 6
const divRightContent = document.createElement('div');
divRightContent.className = 'right-content';
divMain.appendChild(divRightContent);
// Exercicio 7
const img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-Image';
divLeftContent.appendChild(img);
// Exercicio 8
const ul = document.createElement('ul');
divRightContent.appendChild(ul);

const arrayListItem = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
for (let index = 0; index < arrayListItem.length; index += 1) {
  const li = document.createElement('li');
  li.innerHTML = arrayListItem[index];
  ul.appendChild(li);
}

// Exercicio 9
for (let index = 0; index < 3; index += 1) {
  const h3 = document.createElement('h3');
  h3.innerHTML = `Show ${index}`;

  // PARTE 2, Exercicio 2
  h3.className = 'description';

  divMain.appendChild(h3);
}

// PARTE 2, Exercicio 1
h1.className = 'title';

// PARTE 2, Exercicio 3
divMain.removeChild(divLeftContent);

// PARTE 2 Exercicio 4
divRightContent.style.margin = 'auto';

// PARTE 2 Exercicio 5
divCenter.parentElement.style.backgroundColor = 'green';

// PARTE 2 Exercicio 6
ul.lastChild.remove();
ul.lastChild.remove();