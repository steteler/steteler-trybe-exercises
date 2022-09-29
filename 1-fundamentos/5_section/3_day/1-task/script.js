const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

function handleChangeTech(event) {
  const techElement = document.querySelector('.tech');
  techElement.classList.remove('tech');
  event.target.classList.add('tech');
  input.value = '';
}

divUm.addEventListener('click', handleChangeTech);
divDois.addEventListener('click', handleChangeTech);
divTres.addEventListener('click', handleChangeTech);

input.addEventListener('input', (event) => {
  const techElement = document.querySelector('.tech');
  techElement.innerText = event.target.value;
});

myWebpage.addEventListener('dblclick', () => {
  window.location.replace('https://blog.betrybe.com/');
});

myWebpage.addEventListener('mouseover', (event) => {
  event.target.style.color = 'red';
});

myWebpage.addEventListener('mouseout', (event) => {
  event.target.style.color = 'unset';
});