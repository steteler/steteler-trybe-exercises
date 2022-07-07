const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let lowerValue = 999;
for (let index = 0; index < numbers.length; index += 1) {
  if (lowerValue > numbers[index]) {
    lowerValue = numbers[index];
  }
}

console.log('O menor número do array é:', lowerValue);