console.log('O valor do menor índice é: ' + lowestIndexValue([2, 4, 6, 7, 10, 0, -3]));

function lowestIndexValue(value) {
  let lowestValue = 0;
  for (let attributes in value) {
    if (value[attributes] < lowestValue) {
      lowestValue = attributes;
    }
  }
  return lowestValue;
}