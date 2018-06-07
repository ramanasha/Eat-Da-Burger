var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password: 'Raining2301',
    database: 'burger_db'
});

connection.connect(function (err,data) {
    if(err) throw err;

    console.log('Connected as id ' + connection.threadId );
  });

module.exports = connection;

