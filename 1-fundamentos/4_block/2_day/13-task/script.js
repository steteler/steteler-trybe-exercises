const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let oddNumber = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if ((numbers[index] % 2) === 1) {
    oddNumber += 1;
  }
}

console.log('Foram encontrados', oddNumber, 'números impares');