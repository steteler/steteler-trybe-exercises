const math = require('./script');

test('testa o retorno da função multiplicar', () => {
  math.multiplicar = jest.fn()
    .mockReturnValue(10);
  math.multiplicar();
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar()).toBe(10);
});