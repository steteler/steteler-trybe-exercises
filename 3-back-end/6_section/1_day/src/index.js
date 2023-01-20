require('dotenv').config();

const express = require('express');
const { bookRoutes } = require('./routes/index');

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use('/books', bookRoutes);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
