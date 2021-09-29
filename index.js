const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path')

var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, '/build')));

app.get('*', function (req, res) {
    const index = path.join(__dirname, '/build', 'index.html');
    res.sendFile(index);
});

app.use(
    cookieParser(),
    (req, _, next) => {
        try {

        } catch (e) {
            console.log("error ", e);
        }
        return next();
    });

app.listen(3000);