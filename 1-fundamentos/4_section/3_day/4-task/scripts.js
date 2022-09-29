const number = 5;
let spaces = '';
let spacesNumbers = Math.trunc(number / 2);
let asterisks = '';

for (let index = 0; index < ((number + 1) / 2); index += 1) {
  spaces = '';
  asterisks += '*';
  for (let index2 = 0; index2 < spacesNumbers; index2 += 1) {
    spaces += ' ';
  }
  spacesNumbers -= 1;
  console.log(spaces + asterisks + spaces);
  asterisks += '*';
}