const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'vinay',
    database: 'node-complete',
    password: 'drago'
});

module.exports = pool.promise();
