const express = require('express');

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

app.listen(3000);