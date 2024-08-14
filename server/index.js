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

/*
//Test route for API
app.get('/', (req, res) => {
  res.send('Hello World');
});
*/

//Route to add password
app.post('/addpassword', (req, res) => {
  const { password, title } = req.body;

  db.query(
    'INSERT INTO passwords (password, title) VALUES (?,?)',
    [password, title],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send('Success');
      }
    }
  );
});

//Test if server is running
app.listen(PORT, () => {
  console.log('Server running');
});
