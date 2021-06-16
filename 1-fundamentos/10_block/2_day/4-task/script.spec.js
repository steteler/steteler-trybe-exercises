const getRepos = require('./script');

test('gets a list of repositories names', async () => {
  const data = await getRepos('https://api.github.com/orgs/tryber/repos');
  expect(data).toContain('sd-01-week4-5-project-todo-list');
  expect(data).toContain('sd-01-week4-5-project-meme-generator');
});