const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => (
      data.map((repo) => repo.name)
    ))
);

module.exports = getRepos;