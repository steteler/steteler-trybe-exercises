console.log('O maior valor é: ' + highestIndexValue([2, 3, 6, 7, 10, 1]));

function highestIndexValue(values) {
  let highestValue=0;
  for (let attributes in values) {
    if (highestValue < values[attributes]) {
      highestValue = values[attributes];
    }
  }
  return highestValue;
}