/* eslint-disable max-lines-per-function */
const { encode, decode } = require('./encode-decode');

describe('Função encode()', () => {
  it('1 - Verifica se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
  });

  it('2 - Verifica se as vogais "a, e, i, o, u" são convertidas em "1, 2, 3, 4 e 5"', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });

  it('3 - Verifica se a vogal "a" vira "1"', () => {
    expect(encode('ana')).toBe('1n1');
  });

  it('4 - Verifica se a vogal "e" vira "2"', () => {
    expect(encode('ele')).toBe('2l2');
  });

  it('5 - Verifica se a vogal "i" vira "3"', () => {
    expect(encode('xixi')).toBe('x3x3');
  });

  it('6 - Verifica se a vogal "o" vira "4"', () => {
    expect(encode('ovo')).toBe('4v4');
  });

  it('7 - Verifica se a vogal "u" vira "5"', () => {
    expect(encode('nu')).toBe('n5');
  });

  it('8 - Verifica se a string passada por parâmetro tem a mesma quantidade de caracter que a string retornada', () => {
    expect(encode('trybe').length).toBe(5);
  });
});

describe('Função decode()', () => {
  it('1 - Verifica se encode e decode são funções', () => {
    expect(typeof decode).toBe('function');
  });

  it('2 - Verifica se os números "1, 2, 3, 4 e 5" são convertidos em "a, e, i, o, u"', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });

  it('3 - Verifica se a vogal "a" vira "1"', () => {
    expect(decode('1n1')).toEqual('ana');
  });

  it('4 - Verifica se a vogal "e" vira "2"', () => {
    expect(decode('2l2')).toEqual('ele');
  });

  it('5 - Verifica se a vogal "i" vira "3"', () => {
    expect(decode('x3x3')).toEqual('xixi');
  });

  it('6 - Verifica se a vogal "o" vira "4"', () => {
    expect(decode('4v4')).toEqual('ovo');
  });

  it('7 - Verifica se a vogal "u" vira "5"', () => {
    expect(decode('n5')).toEqual('nu');
  });

  it('8 - Verifica se a string passada por parâmetro tem a mesma quantidade de caracter que a string retornada', () => {
    expect(decode('trybe').length).toBe(5);
  });
});