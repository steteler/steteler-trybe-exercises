console.log('O número mais repetido é: ' + moreRepeated([2, 3, 2, 5, 8, 2, 3]));

function moreRepeated(values) {
  let repetitionAmount = 0;
  let highestRepetitionAmount = 0;
  let mostRepeatedNumber = 0;
  for (let attributes in values) {
    for (let index in values) {
      if (values[attributes] === values[index]) {
        repetitionAmount += 1;
      }
    }
    if (repetitionAmount > highestRepetitionAmount) {
      highestRepetitionAmount = repetitionAmount;
      mostRepeatedNumber = attributes;
    }
    repetitionAmount = 0;
  }
  return values[mostRepeatedNumber];
}