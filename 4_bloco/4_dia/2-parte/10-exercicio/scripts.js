console.log(isPalindrome('arara'));

function isPalindrome(string) {
  let arrayTeste = '';
  for (let index = (string.length - 1); index >= 0; index -= 1) {
    arrayTeste = arrayTeste + string[index];
  }
  if (arrayTeste === string) {
    return true;
  }
  else {
    return false;
  }
}