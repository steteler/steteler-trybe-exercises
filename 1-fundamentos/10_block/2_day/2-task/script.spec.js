const { getUserName } = require('./script');

describe('when the user id exists', () => {
  test('returns the user name', () => (
    getUserName(4).then((data) => (
      expect(data).toBe('Mark')
    ))
  ));
});

describe('when the user id does not exists', () => {
  test('returns an error', () => (
    getUserName(6).catch((error) => (
      expect(error).toEqual({ error: 'User with 6 not found.' })
    ))
  ));
});