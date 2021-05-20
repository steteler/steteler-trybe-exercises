const highestIndexValue = (values) => {
  let highestValue = 0;
  for (const attributes in values) {
    if (highestValue < values[attributes]) {
      highestValue = attributes;
    }
  }
  return highestValue;
}

console.log(`O maior índice é: ${highestIndexValue([2, 3, 6, 7, 10, 1])}`);