const express = require('express');
const path = require('path');
const mysql = require('mysql');
const dotenv = require('dotenv')
const port = process.env.PORT || 8080;
const app = express();
// the __dirname is the current directory from where the script is running
const cors = require('cors')
app.use(cors())
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
dotenv.config();
const HOST = process.env.HOST || 'localhost';
const USERNAME = process.env.USER || 'username';
const PASSWORD = process.env.PASSWORD || 'password';
const PORTDB = process.env.DBPORT || 3360;
const DB = process.env.DB || '';

// Create Database Connection
const db = mysql.createConnection({
  host: HOST,
  user: USERNAME,
  password: PASSWORD,
  port: PORTDB,
  database: DB
})

db.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + db.threadId);
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);