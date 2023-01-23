const express = require('express');
const controllers = require('../controllers/index');

const accountRouter = express.Router();

accountRouter.get('/:id', controllers.account.getById);
accountRouter.get('/:id/comments', controllers.comment.getCommentsByAccountId);

module.exports = accountRouter;
