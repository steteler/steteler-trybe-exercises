function longestWord(phrase) {
  let wordArray = phrase.split(' ');
  let biggestLetter = '';

  for(const INDEX of wordArray) {
    if (INDEX.length > biggestLetter.length) biggestLetter = INDEX;
  }
  return biggestLetter;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));