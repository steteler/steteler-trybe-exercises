require('dotenv').config();

const express = require('express');
const routes = require('./routes/index');

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use('/books', routes.book);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
