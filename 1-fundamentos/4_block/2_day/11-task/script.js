let average = 0;
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  average += numbers[index];
}
average /= numbers.length;

if (average > 20) {
  console.log('A média é maior que 20, a média foi de:', average);
} else {
  console.log('A média é menor que 20, a média foi de:', average);
}