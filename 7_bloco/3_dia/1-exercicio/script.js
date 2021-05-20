const assert = require('assert');

const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw Error('parameters must be numbers');
  }
  return a + b;
};

assert.strictEqual(typeof sum, 'function');
// Exercicio 1
assert.strictEqual(sum(4, 5), 9);
// Exercicio 2
assert.strictEqual(sum(0, 0), 0);
// Exercicio 3
assert.throws(() => { sum(4, '5'); });
// Exercicio 4
assert.throws(() => { sum(4, '5'); }, /^Error: parameters must be numbers$/);