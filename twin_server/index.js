const sqlite3 = require('sqlite3').verbose();

const express = require('express')
const app = express()

let sql = `SELECT * FROM twin_watch_links`;

let db = new sqlite3.Database('./dataset.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

db.all(sql,[],(err, rows ) => {
    // console.log(err);   
    // console.log(rows);   
});

db.close()

app.get("/", (req, res) => {
    res.send("hello");
});

app.listen(3001, ()=> {
    console.log("running on port 3001");
})