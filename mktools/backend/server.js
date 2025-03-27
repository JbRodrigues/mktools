const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./routes/userRoutes');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rotas
const path = require('path');
app.use(express.static(path.join(__dirname, '../frontend/public/index.html')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});