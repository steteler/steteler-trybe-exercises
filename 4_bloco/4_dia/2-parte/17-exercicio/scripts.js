console.log(compareFinalString('teste', 'ste'));

function compareFinalString(word, wordEnd) {
  let compareWords='';
  for (let index=(word.length-1); index >= 0; index -= 1) {
    if (index >= (word.length - wordEnd.length)) {
      compareWords += word[index];
    }
  }

  compareWords = compareWords.split("");
  compareWords = compareWords.reverse();
  compareWords = compareWords.join("");

  if (compareWords === wordEnd) {
    return true;
  }
  else {
    return false;
  }
}