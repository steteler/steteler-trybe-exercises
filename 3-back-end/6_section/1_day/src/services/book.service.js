const { Book } = require('../models/index');

async function getAll() {
  const books = await Book.findAll();
  return books;
}

module.exports = {
  getAll,
};
