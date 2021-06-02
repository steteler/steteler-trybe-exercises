/* eslint-disable max-lines-per-function */
const myFizzBuzz = require('./myFizzBuzz');

describe('Função myFizzBuzz()', () => {
  it('1 - Verifica se myFizzBuzz(15) retorna "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('2 - Verifica se myFizzBuzz(3) retorna "fizz"', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });

  it('3 - Verifica se myFizzBuzz(5) retorna "buzz"', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });

  it('4 - Verifica se myFizzBuzz(2) retorna 2', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });

  it('5 - Verifica se myFizzBuzz("2") retorna false', () => {
    expect(myFizzBuzz('2')).toBe(false);
  });
});