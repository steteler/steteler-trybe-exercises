let number=8;
let numberAsterisks = '';

if (number > 1) {
  for (let index = 0; index < number; index += 1) {
    numberAsterisks += '*';
  }
  
  for (let index = 0; index < number; index += 1) {
    console.log(numberAsterisks);
  }
}