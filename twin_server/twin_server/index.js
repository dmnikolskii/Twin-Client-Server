const sqlite3 = require('sqlite3').verbose();

const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors());

app.use(bodyParser.json());
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
    res.send('hi');
    console.log(req);
});


app.get('/api/fetch_links', (req, res) => {
    console.log(req.query);
    res.send(req.query);
    //db.all(sql,[],(err, rows ) => {
        // console.log(err);   
        //console.log(req);
    //    res.send({rows});
    //});
    //db.close()    
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});