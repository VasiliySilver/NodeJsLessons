var express = require('express');

var app = express();

app.get('/', function (req, res) {
   res.send('This is home');
});
app.get('/news', function (req, res) {
   res.send('This is news');
});
app.get('/news/:name/:id', function (req, res) {
   res.send('Name is - ' + req.params.name + req.params.id);
});

app.listen(3000);