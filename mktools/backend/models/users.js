const db = require('../config/database.js');

// Cria a tabela 'usuarios' se ela não existir
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT UNIQUE,
      senha TEXT
    )
  `, (err) => {
    if (err) {
      console.error('Erro ao criar tabela:', err.message);
    } else {
      console.log('Tabela "usuarios" pronta');
    }
  });
});

// Funções para interagir com o banco
const Usuario = {
  criar: (nome, senha, callback) => {
    db.run('INSERT INTO usuarios (nome, senha) VALUES (?, ?)', [nome, senha], callback);
  },
  buscarPorNome: (nome, callback) => {
    db.get('SELECT * FROM usuarios WHERE nome = ?', [nome], callback);
  }
};

module.exports = Usuario;