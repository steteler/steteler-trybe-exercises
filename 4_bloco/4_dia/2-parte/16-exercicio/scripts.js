console.log(sumNumbers(5));

function sumNumbers(values) {
  let result=0;
  for (let index=0; index <= values; index += 1) {
    result += index;
  }
  return result;
}