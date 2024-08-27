const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 8001;

app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'order_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to order_db');
});

app.get('/orders', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Order service running on port ${port}`);
});
