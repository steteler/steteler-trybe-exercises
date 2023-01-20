const express = require('express');
const controller = require('../controllers/index');

const bookRouter = express.Router();

bookRouter.get('/', controller.book.getAll);
bookRouter.get('/:id', controller.book.getById);

bookRouter.post('/', controller.book.createNewBook);

bookRouter.put('/:id', controller.book.updateBook);

bookRouter.delete('/:id', controller.book.deleteBook);

module.exports = bookRouter;
