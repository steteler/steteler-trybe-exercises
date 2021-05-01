function longestWord(phrase) {
  let wordArray = phrase.split(' ');
  let longestWord = '';

  for(const index of wordArray) {
    if (index.length > longestWord.length) { longestWord = index };
  }
  return longestWord;

  //Também da pra fazer desse jeito abaixo.
  //const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));