const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

assert.strictEqual(typeof myRemoveWithoutCopy, 'function');
// Exercicio 1
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
// Exercicio 2
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
// Exercicio 3
const myList = [1, 2, 3, 4];
myRemoveWithoutCopy(myList, 1);
assert.deepStrictEqual(myList, [2, 3, 4]);
// Exercicio 4
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);