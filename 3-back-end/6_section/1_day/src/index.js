require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));