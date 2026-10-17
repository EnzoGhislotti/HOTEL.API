const mysql = require('mysql');

const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '', // XAMPP: senha vazia
  database: process.env.DB_NAME || 'hotel'
});

db.getConnection((err, conn) => {
  if (err) {
    console.error('Erro ao conectar no banco:', err.message);
    return;
  }
  console.log('Conectado ao banco de dados!');
  conn.release();
});

module.exports = db;
