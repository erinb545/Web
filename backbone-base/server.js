var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var server = http.createServer(app);
var fs = require('fs');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var httpPort = 8081;

var username = 'unknown user';

server.listen(httpPort);

//app.use('/libs', express.static(path.resolve(__dirname + "/../libs")));
app.use(express.static(__dirname));
app.set('views', './templates');
app.engine('hbs', exphbs({
    partialsDir: 'templates/partials/'
}));
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:9030");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
  next();
});

app.get('/', function(req, res) {
    res.render('login');
});

app.get(['/app', '/app/*'], function(req, res) {
    res.render('index', {
        username: username,
        dashboardName: 'Index'
    });
});

app.get('/session/vars', function(req, res) {
    res.send(JSON.stringify({
        username: username
    }));
});

app.post('/login',
    function(req, res) {
        console.log(req.body);

        // Hard-code working username and password for right now
        if (req.body.password == "password") {
            console.log("Authenticated. Redirecting to /app");
            username = req.body.email;
            res.redirect('/app');
        } else {
            res.redirect('/');
        }
    }
);

console.log('Server running at http://localhost:' + httpPort + '/');

