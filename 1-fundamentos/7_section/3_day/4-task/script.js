const assert = require('assert');

const myFizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
};

assert.strictEqual(typeof myFizzBuzz, 'function');
// Exercicio 1
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
// Exercicio 2
assert.strictEqual(myFizzBuzz(3), 'fizz');
// Exercicio 3
assert.strictEqual(myFizzBuzz(5), 'buzz');
// Exercicio 4
assert.strictEqual(myFizzBuzz(17), 17);
// Exercicio 5
assert.strictEqual(myFizzBuzz('this_is_not_a_number'), false);