const service = require('../services/index');

async function getAll(_req, res) {
  const books = await service.book.getAll();

  res.status(200).json({ message: books });
}

async function getById(req, res) {
  const { id } = req.params;

  const book = await service.book.getById(id);

  if (!book) {
    res.status(404).json({ message: 'Book not found' });
  }

  res.status(200).json({ message: book });
}

module.exports = {
  getAll,
  getById,
};
