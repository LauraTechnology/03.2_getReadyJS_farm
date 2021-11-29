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
    password: "root",
    database: "agurkas",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


//Read Node
app.get('/cow_farm', (req, res) => {
    const sql = `
        SELECT *
        FROM cow_farm
    `;
    con.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})


//Create Node
app.post('/cow_farm', (req, res) => {
    const sql = `
        INSERT INTO cow_farm
        (name, weight, total_milk, last_milking_time)
        VALUES (?, ?, ?, ?)
    `;
    con.query(sql, [
        req.body.name,
        req.body.weight,
        req.body.total_milk,
        req.body.last_milking_time
    ], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

//Update Node
app.put('/cow_farm/:id', (req, res) => {
    const sql = `
        UPDATE cow_farm
        SET name = ?, weight = ?, total_milk = ?, last_milking_time = ?
        WHERE id = ?
    `;
    con.query(sql, [
        req.body.name,
        req.body.weight,
        req.body.total_milk,
        req.body.last_milking_time,
        req.params.id
    ], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

//Delete Node
app.delete('/cow_farm/:id', (req, res) => {
    const sql = `
        DELETE FROM cow_farm
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
app.get('/cow_farm-filter/:t', (req, res) => {
    const sql = `
        SELECT *
        FROM cow_farm
        WHERE weight = ?
    `;
    
    con.query(sql, [req.params.t], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

//Search Node
app.get('/cow_farm-weight', (req, res) => {
    const sql = `
        SELECT *
        FROM cow_farm
        WHERE weight LIKE ?
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