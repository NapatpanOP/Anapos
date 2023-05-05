const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'cards',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database');
  }
});

app.get('/cards', (req, res) => {
  const query = 'SELECT * FROM cards';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error retrieving cards:', err);
      res.status(500).send('Error retrieving cards');
    } else {
      res.send(results);
    }
  });
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
