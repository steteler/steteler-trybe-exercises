const express = require('express');
const routes = require('./routes/index');

const app = express();

app.use(express.json());

// using eager loading
app.use('/accounts', routes.account);

// using lazy loading
app.use('/accounts-v2', routes.accountV2);

module.exports = app;
