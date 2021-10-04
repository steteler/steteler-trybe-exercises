const myRemove = (arr, item) => {
  const newArr = [];
  arr.forEach((number) => {
    if (item !== number) {
      newArr.push(number);
    }
  });
  return newArr;
};

module.exports = myRemove;