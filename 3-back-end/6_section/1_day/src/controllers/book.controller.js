const service = require('../services/index');

async function getAll(_req, res) {
  const books = await service.book.getAll();

  res.status(200).json({ message: books });
}

module.exports = {
  getAll,
};
