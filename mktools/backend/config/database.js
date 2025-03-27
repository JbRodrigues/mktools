const sqlite3 = require('sqlite3').verbose();

// Conexão com o banco (o arquivo 'meuapp.db' será criado na raiz do projeto)
const db = new sqlite3.Database('./data/mktools.db', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco:', err.message);
  } else {
    console.log('Conectado ao banco SQLite');
  }
});

// Exporta a conexão para ser usada em outros arquivos
module.exports = db;