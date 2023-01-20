const service = require('../services/index');

async function getAll(_req, res) {
  const books = await service.book.getAll();

  res.status(200).json(books);
}

async function getById(req, res) {
  const { id } = req.params;

  const book = await service.book.getById(id);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  return res.status(200).json(book);
}

async function createNewBook(req, res) {
  const { title, author, pageQuantity } = req.body;

  const newBook = await service.book.createNewBook({ title, author, pageQuantity });

  res.status(201).json(newBook);
}

async function updateBook(req, res) {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;

  const updatedBook = await service.book.updateBook(id, { title, author, pageQuantity });

  if (!updatedBook) {
    return res.status(404).json({ message: 'Book not found!' });
  }

  return res.status(201).json({ message: 'Book updated' });
}

module.exports = {
  getAll,
  getById,
  createNewBook,
  updateBook,
};
