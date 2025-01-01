/* Conexion a base de datos Postgres */
const { Client } = require('pg');

async function getConnection() {
  /* Configuracion de la conexión */
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'pacool84',
    password: 'admin123',
    database: 'my_store',
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
