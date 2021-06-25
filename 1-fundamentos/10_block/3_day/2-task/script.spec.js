const math = require('./script');

test('multiplicar com retorno padrão de valor "10"', () => {
  math.multiplicar = jest.fn()
    .mockReturnValue(10);
  math.multiplicar();
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar()).toBe(10);
});