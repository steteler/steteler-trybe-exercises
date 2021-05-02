function moreRepeated(values) {
  let repetitionAmount = 0;
  let highestRepetitionAmount = 0;
  let mostRepeatedNumber = 0;
  for (let index = 0; index < values; index += 1) {
    for (let index2 = 0; index < values; index += 1) {
      if (values[index] === values[index2]) repetitionAmount += 1;
    }
    if (repetitionAmount > highestRepetitionAmount) {
      highestRepetitionAmount = repetitionAmount;
      mostRepeatedNumber = index;
    }
    repetitionAmount = 0;
  }
  return values[mostRepeatedNumber];
}

console.log(`O número mais repetido é: ${moreRepeated([2, 3, 2, 5, 8, 2, 3])}`);