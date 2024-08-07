const express = require('express');
const app = express();
const PORT = 3001;
const mysql = require('mysql');

//Creates connection to local database
const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'PasswordManager',
});

//Test route for API
app.get('/', (req, res) => {
  res.send('Hello World');
});

//Test if server is running
app.listen(PORT, () => {
  console.log('Server running');
});
