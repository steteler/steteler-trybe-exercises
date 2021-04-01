let number = 5;
let asterisks = '';
let spaces = '';
let spacesNumbers=number-1;

for (let index=0; index < number; index += 1) {
  for (let index=0; index < spacesNumbers; index += 1) {
    spaces += ' ';
  }
  spacesNumbers -= 1;
  asterisks += '*'
  console.log(spaces + asterisks, '\n');
  spaces = '';
}