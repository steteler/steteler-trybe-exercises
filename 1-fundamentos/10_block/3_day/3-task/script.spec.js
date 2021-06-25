const math = require('./script');

test('', () => {
  const mockSomar = jest.spyOn(math, 'somar');
  mockSomar.mockResolvedValue(5);

  mockSomar(2, 3);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar).toHaveBeenCalledWith(2, 3);
  expect(mockSomar(2, 3)).resolves(5);
});