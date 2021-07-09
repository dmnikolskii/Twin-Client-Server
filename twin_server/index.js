const sqlite3 = require('sqlite3').verbose();

const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

let sql = `SELECT * FROM twin_watch_links WHERE id = 1`;

let db = new sqlite3.Database('./dataset.db', (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    }
    console.log('Connected to the database.');
});

app.get("/", (req, res) => {
    console.log(req);
});


app.get("/fetch_links", (req, res) => {
    db.all(sql,[],(err, rows ) => {
        // console.log(err);   
        console.log(req);
        res.send(rows[0].caption);

    });
    db.close()    
});




app.listen(3001, ()=> {
    console.log("running on port 3001");
})