const sumNumbers = (values) => {
  let result = 0;
  for (let index = 0; index <= values; index += 1) {
    result += index;
  }
  return result;
};

console.log(sumNumbers(5));