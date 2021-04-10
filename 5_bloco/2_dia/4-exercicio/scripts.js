// Exercicio 1
const h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';

document.body.appendChild(h1);
// Exercicio 2
const div = document.createElement('div');
div.className = 'main-content';
document.body.appendChild(div);
// Exercicio 3
const div2 = document.createElement('div');
div2.className = 'center-content';
div.appendChild(div2);
// Exercicio 4
const p = document.createElement('p');
p.innerText = 'Algum texto';
div.appendChild(p);
// Exercicio 5
const div3 = document.createElement('div');
div3.className = 'left-content';
div.appendChild(div3);
// Exercicio 6
const div4 = document.createElement('div');
div4.className = 'right-content';
div.appendChild(div4);
// Exercicio 7
const img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-Image';
div.appendChild(img);
// Exercicio 8
const ul = document.createElement('ul');
div4.appendChild(ul);

const arrayListItem = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
for (let index in arrayListItem) {
  const li = document.createElement('li');
  li.innerHTML = arrayListItem[index];
  ul.appendChild(li);
}
// Exercicio 9
for (let index = 0; index < 3; index += 1) {
  const h3 = document.createElement('h3');

  // PARTE 2, Exercicio 2
  h3.className = 'description'

  div4.appendChild(h3);
}

// PARTE 2, Exercicio 1
h1.className = 'title';

// PARTE 2, Exercicio 3
div.removeChild(div3);

// PARTE 2 Exercicio 4
div4.style.margin = 'auto';

// PARTE 2 Exercicio 5
div2.parentElement.style.backgroundColor = 'green';

// PARTE 2 Exercicio 6
div.lastChild.remove();
div.lastChild.remove();