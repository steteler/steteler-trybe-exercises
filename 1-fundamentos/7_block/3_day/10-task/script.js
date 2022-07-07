const greetPeopleNew = (people) => {
  const greeting = [];
  for (const person of people) {
    greeting.push(`Hello ${person}`);
  }
  return greeting;
};

const assert = require('assert');

assert.strictEqual(typeof greetPeopleNew, 'function');

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

const output = greetPeopleNew(parameter);
assert.deepStrictEqual(output, result);