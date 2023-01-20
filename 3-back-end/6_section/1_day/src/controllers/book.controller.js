const service = require('../services/index');

async function getAll(_req, res) {
  const books = await service.book.getAll();

  res.status(200).json(books);
}

async function getById(req, res) {
  const { id } = req.params;

  const book = await service.book.getById(id);

  if (!book) {
    res.status(404).json({ message: 'Book not found' });
  }

  res.status(200).json(book);
}

async function createNewBook(req, res) {
  const { title, author, pageQuantity } = req.body;

  const newBook = await service.book.createNewBook({ title, author, pageQuantity });

  res.status(201).json(newBook);
}

module.exports = {
  getAll,
  getById,
  createNewBook,
};
