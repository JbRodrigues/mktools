const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./routes/userRoutes');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rotas
app.use('/', userRoutes);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});