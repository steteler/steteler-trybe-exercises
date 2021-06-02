let average = 0;
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  average += numbers[index];
}

average /= numbers.length;

console.log(average);
