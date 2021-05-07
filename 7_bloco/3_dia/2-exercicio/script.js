const assert = require('assert');

function myRemove(arr, item) {
  const newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

assert.strictEqual(typeof myRemove, 'function');
// Exercicio 1
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
// Exercicio 2
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
// Exercicio 3
const myList = [5, 6, 7, 8];
myRemove(myList, 5);
assert.deepStrictEqual(myList, [5, 6, 7, 8]);
// Exercicio 4
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);