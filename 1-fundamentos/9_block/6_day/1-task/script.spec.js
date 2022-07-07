const math = require('./script');

test('testa a chamada da função subtrair', () => {
  math.subtrair = jest.fn();
  math.subtrair();
  expect(math.subtrair).toHaveBeenCalled();
});