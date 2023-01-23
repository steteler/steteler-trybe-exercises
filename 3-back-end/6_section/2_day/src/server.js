require('dotenv').config();

const app = require('./app');

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`A aplicação está sendo executada na porta ${PORT}`);
});
