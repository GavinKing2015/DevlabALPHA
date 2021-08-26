console.log('hello node');

const express = require('express');
const app = express();


app.get('/', function(req, res) {
    res.sendFile('index.html', { root: __dirname }); //this 2nd argument says look into this directory we are already in and find that 1st file path. 
});

app.listen(3000);