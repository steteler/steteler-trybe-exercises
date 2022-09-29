const uppercase = require('./script');

test('uppercase "test" to equal "TEST"', (done) => {
  uppercase('teste', (str) => {
    expect(str).toBe('TESTE');
    done();
  });
});