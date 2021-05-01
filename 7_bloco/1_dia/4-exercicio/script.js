function longestWord(phrase) {
  let wordArray = phrase.split(' ');
  let biggestLetter = '';

  for(const index of wordArray) {
    if (index.length > biggestLetter.length) { biggestLetter = index };
  }
  return biggestLetter;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));