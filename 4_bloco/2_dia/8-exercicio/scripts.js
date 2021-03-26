// Parte 1


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total=0;
let average=0;

/*

 for (let index=0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

*/


// Parte 2

/*

for (let index=0; index < numbers.length; index += 1) {
  total += numbers[index];
}

console.log('A soma de todos os números é:', total);

*/


// Parte 3

/*

for (let index=0; index < numbers.length; index += 1) {
  average += numbers[index];
}
average = (average/numbers.length);

console.log(average);

*/


// Parte 4

/*

for (let index=0; index < numbers.length; index += 1) {
  average += numbers[index];
}
average = (average/numbers.length);

if (average > 20) {
  console.log('A média é maior que 20, a média foi de:', average);
}
else {
  console.log('A média é menor que 20, a média foi de:', average);
}

*/


// Parte 5

/*

let higherNumber=0;
for (let index=0; index < numbers.length; index += 1) {
  if (higherNumber < numbers[index]) {
    higherNumber = numbers[index];
  }
}

console.log('O maior número é:', higherNumber);

*/


// Parte 6

/*

let oddNumber=0;
for (let index=0; index < numbers.length; index += 1) {
  if ((numbers[index] % 2) === 1) {
    oddNumber += 1;
  }
}

console.log('Foram encontrados', oddNumber, 'números impares');

*/


// Parte 7

/*

let lowerValue=999;
for (let index=0; index < numbers.length; index += 1) {
  if (lowerValue > numbers[index]) {
    lowerValue = numbers[index];
  }
}

console.log('O menor número do array é:', lowerValue);

*/


// Parte 8

/*

let counter = [];

for (let index=1; index <= 25; index += 1) {
  counter.push(index);
}

console.log(counter);

*/


// Parte 9

/*

let counter = [];

for (let index=0; index <= 25; index += 1) {
  counter.push(index);
  console.log(counter[index], 'dividido por 2 é:', (counter[index] / 2));
}

*/