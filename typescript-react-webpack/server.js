var httpPort = 8082;

console.log(__dirname);

var express = require('express'),
    http = require('http');
var app = express();
var server = http.createServer(app);
var fs = require('fs');

server.listen(httpPort);

app.use(express.static(__dirname));
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname);

app.get(['*'], function(req, res) {
    res.render('index.html');
});

console.log('Server running at: localhost ' + httpPort);