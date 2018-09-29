const express = require('express');

const port = process.env.PORT || 3000;
var app = express();

app.get('/', (req, res) => {
    res.send('Hello Express');
});

app.get('/home', (req, res) => {
    res.send('Home Page');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Error Page',
        time: 118282
    });
});

app.listen(port);