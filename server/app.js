const express = require('express')
const app = express()
const port = 3003
const mysql = require('mysql')
const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "egzaminas",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

//Read Node
app.get('/lentele', (req, res) => {
    const sql = `
        SELECT *
        FROM lentele
    `;
    con.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

//Create Node
app.post('/lentele', (req, res) => {
    const sql = `
        INSERT INTO lentele
        (th, th, th, th)
        VALUES (?, ?, ?, ?)
    `;
    con.query(sql, [
        req.body.th,
        req.body.th,
        req.body.th,
        req.body.th
    ], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

//Update Node
app.put('/lentele/:id', (req, res) => {
    const sql = `
        UPDATE lentele
        SET th = ?, th = ?, th = ?, th = ?
        WHERE id = ?
    `;
    con.query(sql, [
        req.body.th,
        req.body.th,
        req.body.th,
        req.body.th,
        req.params.id
    ], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

//Delete Node
app.delete('/lentele/:id', (req, res) => {
    const sql = `
        DELETE FROM lentele
        WHERE id = ?
        `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})


//Filter Node
app.get('/lentele-filter/:t', (req, res) => {
    const sql = `
        SELECT *
        FROM lentele
        WHERE th = ?
    `;
    
    con.query(sql, [req.params.t], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

//Search Node
app.get('/lentele-key', (req, res) => {
    const sql = `
        SELECT *
        FROM lentele
        WHERE key LIKE ?
    `;
    con.query(sql, ['%' + req.query.s + '%'], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});