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

  const wasUpdated = await service.book.updateBook(id, { title, author, pageQuantity });

  if (!wasUpdated) {
    return res.status(404).json({ message: 'Book not found!' });
  }

  return res.status(201).json({ message: 'Book updated' });
}

async function deleteBook(req, res) {
  const { id } = req.params;

  const wasRemoved = await service.book.deleteBook(id);

  if (!wasRemoved) {
    return res.status(404).json({ message: 'Book not found' });
  }

  return res.status(200).json({ message: 'deleted' });
}

module.exports = {
  getAll,
  getById,
  createNewBook,
  updateBook,
  deleteBook,
};
