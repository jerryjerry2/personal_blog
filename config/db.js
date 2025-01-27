var mysql = require('mysql');

var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database : process.env.DB_DATABASE
});

con.connect(function(err) {
  
  if (err) {
    console.log(err)
    return;
  }
  console.log("Connected!");
  
  
});

module.exports = con;