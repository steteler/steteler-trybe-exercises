const assert = require('assert');

const removeVowelsNew = (word) => {
  const characters = word.split('');
  const results2 = [];
  let counter = 0;

  results2.push(characters.reduce((accumulator, value) => { 
    if (value === 'a' || value === 'o' || value === 'i' || value === 'e' || value === 'u') {
      return accumulator + (counter += 1);
    }
    return accumulator + value;
  }, ''));
  return results2.toString();
};

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(typeof removeVowelsNew, 'function');
const output = removeVowelsNew(parameter);
assert.strictEqual(output, result);