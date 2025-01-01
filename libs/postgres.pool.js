/* Pool de conexiones a la base de datos*/
const { Pool } = require('pg');

/* Configuracion de la conexión */
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'pacool84',
  password: 'admin123',
  database: 'my_store',
});

module.exports = pool;
