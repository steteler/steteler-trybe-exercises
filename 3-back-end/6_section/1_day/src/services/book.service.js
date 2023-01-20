const { Book } = require('../models/index');

async function getAll() {
  const books = await Book.findAll();
  return books;
}

async function getById(id) {
  const book = await Book.findByPk(id);
  return book;
}

module.exports = {
  getAll,
  getById,
};
