



const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config()

var db_connection = mysql.createConnection({
  connectionLimit: 1000,
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
});

db_connection.connect((err) => {
  if (err) console.error(err);
  // console.log('MySQL Connection Established.');
  null;
});


module.exports.db_connection = db_connection;



