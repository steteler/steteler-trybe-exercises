function isPalindrome(string) {
  let arrayTeste = '';
  for (let index = (string.length - 1); index >= 0; index -= 1) {
    arrayTeste += string[index];
  }
  if (arrayTeste === string) {
    return true;
  }
  return false;
}

console.log(isPalindrome('arara'));