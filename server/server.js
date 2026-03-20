const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Connect to MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',           // Use your MySQL username
  password: '',           // Use your MySQL password
  database: 'cafedb'      // Name of your database
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection failed:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// GET all cafes
app.get('/cafes', (req, res) => {
  db.query('SELECT * FROM cafes', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Query failed' });
    } else {
      res.json(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
