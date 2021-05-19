const myRemove = require('./myRemove');

describe('Função myRemove()', () => {
  it('1 - Verifica se myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('2 - Verifica se myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('3 - Verifica se o array passado por parâmetro não sofreu alterações', () => {
    expect(myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  it('4 - Verifica se myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});