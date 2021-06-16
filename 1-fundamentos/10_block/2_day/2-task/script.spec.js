const { getUserName, findUserById } = require('./script');

describe('when the user id exists', () => {
  test('returns the user name', async () => {
    expect(await getUserName(4)).toBe('Mark');
  });
});

describe('when the user id does not exists', () => {
  test('returns an error', async () => {
    try {
      await getUserName(6);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 6 not found.' });
    }
  });
});