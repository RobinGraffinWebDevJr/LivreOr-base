let mysql      = require('mysql');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'tidus',
  password : 'root',
  database : 'expressjs'
});
 
connection.connect()

module.exports = connection
