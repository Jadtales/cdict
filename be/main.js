var express = require('express');
var path = require('path');
// constant variables
var serverPort = process.env.PORT || 3000;
var app = express();
// serving static files
app.use(express.static(path.join(__dirname, '../dist')));
console.log(__dirname);
// get the main page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
    console.log('hello');
});
app.listen(serverPort, function () {
    console.log("Listening on port ".concat(serverPort));
});
