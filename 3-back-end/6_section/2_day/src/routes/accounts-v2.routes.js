const express = require('express');
const controllers = require('../controllers/index');

const accountRouterV2 = express.Router();

accountRouterV2.get('/:id', controllers.account.getById);

module.exports = accountRouterV2;
