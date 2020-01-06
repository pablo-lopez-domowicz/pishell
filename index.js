let express = require('express');
let app = express();
let path = require('path');
let port = 4499;
let endpoints = require('./endpoints.js');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/endpoints', (req, res, next) => {
    return res.json(endpoints)
});

app.use('/', (req, res, next) => {
    return res.json(endpoints)
});

app.listen(port);
console.log('Listening on http://localhost:' + port);
