const express = require('express');
const mysql = require('mysql');
const dotenv = require("dotenv")
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
dotenv.config();

const HOST = process.env.HOST || 'localhost';
const USERNAME = process.env.USER || 'username';
const PASSWORD = process.env.PASSWORD || 'password';
const PORT = process.env.DBPORT || 3360;
const DB = process.env.DB || '';


// Create Database Connection
const db = mysql.createConnection({
  host: HOST,
  user: USERNAME,
  password: PASSWORD,
  port: PORT,
  database: DB
})
db.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + db.threadId);
});

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/connect-to-db', function (req, res) {
  return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);
db.end();