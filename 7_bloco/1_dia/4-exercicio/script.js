function longestWord(phrase) {
  const wordArray = phrase.split(' ');
  let longestWordString = '';

  for (const index of wordArray) {
    if (index.length > longestWordString.length) longestWordString = index;
  }
  return longestWordString;
  // Também da pra fazer desse jeito abaixo.
  // const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));