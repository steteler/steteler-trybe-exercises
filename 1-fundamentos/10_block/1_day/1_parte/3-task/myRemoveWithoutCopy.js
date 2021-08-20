const myRemoveWithoutCopy = (arr, item) => {
  arr.forEach((number, index) => {
    if (number === item) {
      console.log(index);
      arr.splice(index, 1);
    }
  });

  return arr;
};

module.exports = myRemoveWithoutCopy;