const express = require('express');
const router = express.Router();
const usersController = require('../controller/usersController');

// Rota de cadastro (GET e POST)
router.get('/cadastro', (req, res) => {
  res.send(`
    <h1>Cadastro</h1>
    <form method="POST" action="/cadastro">
      <label>Nome: <input type="text" name="nome" required></label><br>
      <label>Senha: <input type="password" name="senha" required></label><br>
      <button type="submit">Cadastrar</button>
    </form>
  `);
});
router.post('/cadastro', usersController.cadastro);

// Rota protegida
router.get('/protegida', usersController.verificarAutenticacao, (req, res) => {
  res.send(`Bem-vindo à página protegida, ${req.usuario.nome}!`);
});

module.exports = router;