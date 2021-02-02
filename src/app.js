require('dotenv').config({path: '../.env'});
const express = require('express');
const routes = require('./routes');
const app = express();
const port = process.env.PORT || 5000
const host = '0.0.0.0';

app.use(express.json());
app.use(routes);

app.listen(port, host, () => {
  console.log('Aplicação rodando na porta 4000')
});
