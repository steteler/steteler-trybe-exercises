const allObjs = require('./objs');

describe('Todos Objetos', () => {
  it('1 - Verificar se dois objetos são idênticos ou não', () => {
    expect(allObjs.obj1).toEqual(allObjs.obj2);
  });
});