const uppercase = require('./1-task');

test('uppercase "test" to equal "TEST"', (done) => {
  uppercase('teste', (str) => {
    expect(str).toBe('TESTE');
    done();
  });
});