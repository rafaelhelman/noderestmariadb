const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dgrvbi',
    });


    module.exports = {
      port: 4000,
      pool,
    }
