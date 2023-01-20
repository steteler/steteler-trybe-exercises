const express = require('express');
const controller = require('../controllers/index');

const bookRouter = express.Router();

bookRouter.get('/', controller.book.getAll);
bookRouter.get('/:id', controller.book.getById);

module.exports = bookRouter;
