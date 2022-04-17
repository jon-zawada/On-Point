const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'Points'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`connected as id ${connection.threadId}`);
  }
});

module.exports = connection;
