const Usuario = require('../models/users');

const usersController = {
  cadastro: (req, res) => {
    const { nome, senha } = req.body;
    Usuario.criar(nome, senha, (err) => {
      if (err) {
        return res.status(400).send('Usuário já existe ou erro ao cadastrar.');
      }
      res.send(`Usuário ${nome} cadastrado! Use o header 'usuario: ${nome}' para autenticar.`);
    });
  },

  verificarAutenticacao: () => {
    const { usuario } = req.headers;
    Usuario.buscarPorNome(usuario, (err, row) => {
      if (err || !row) {
        return res.status(401).send('Usuário não autenticado.');
      }
      req.usuario = row; // Passa o usuário autenticado
      next();
    });
  }
};

module.exports = usersController;