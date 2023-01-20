const { Book } = require('../models/index');

async function getAll() {
  const books = await Book.findAll();
  return books;
}

async function getById(id) {
  const book = await Book.findByPk(id);
  return book;
}

async function createNewBook(book) {
  const newBook = await Book.create({ ...book });
  return newBook;
}

async function updateBook(id, book) {
  const [wasUpdated] = await Book.update(book, { where: { id } });
  return wasUpdated;
}

async function deleteBook(id) {
  const wasRemoved = await Book.destroy({ where: { id } });
  return wasRemoved;
}

module.exports = {
  getAll,
  getById,
  createNewBook,
  updateBook,
  deleteBook,
};
