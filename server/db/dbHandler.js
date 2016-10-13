var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: process.env.DB_PW,
  host: 'localhost',
  database: 'SecLit'
});

// connection.connect(function(error) {
//   if (error) {
//     throw error;
//   }
//   console.log('database connection established');
// });

module.exports = connection;