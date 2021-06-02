const assert = require('assert');

const removeVowelsNew = (word) => {
  const characters = word.split('');
  const results2 = [];
  const vowels = ['a', 'o', 'i', 'e', 'u'];
  let counter = 0;

  results2.push(characters.reduce((accumulator, value, index) => { 
    if (value === vowels[index]) {
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