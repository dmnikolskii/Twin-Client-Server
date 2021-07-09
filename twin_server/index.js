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

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

app.post('/api/fetch_links', (req, res) => {

    const country = req.body.country;
    const city = req.body.city;
    const line = req.body.line;
    
    let sql = `SELECT * FROM twin_watch_links WHERE country = '${country}' AND plant = '${city}' AND line = '${line}';`;
    //if (city === '') sql = `SELECT * FROM twin_watch_links WHERE country = '${country}' AND line = '${line}';`;
    //if (line === '') sql = `SELECT * FROM twin_watch_links WHERE country = '${country}' AND plant = '${city}';`;
    console.log(req.body);
    // if (isEmpty(req.body)) {sql = `SELECT * FROM twin_watch_links`};

    db.all(sql,[],(err, rows ) => {
        // console.log(err);   
        console.log(rows);
        //res.send("Hi");   
        res.send(rows);   
        
    });
    //db.close()    
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});