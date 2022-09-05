require('dotenv').config();

const mysql = require('mysql2');
//console.log(process.env)
//Here we will create pool so that we can create multiple connections
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
});

module.exports = pool.promise();