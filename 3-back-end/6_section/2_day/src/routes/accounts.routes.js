const express = require('express');
const controllers = require('../controllers/index');

const accountRouter = express.Router();

accountRouter.get('/:id', controllers.account.getById);

module.exports = accountRouter;
