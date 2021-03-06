var fs = require('fs');

// Подключение к локальному серверу
var http = require('http');

var server = http.createServer(function(req, res) {
    console.log("URL страницы: " + req.url);
    if (req.url === '/index' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/about.html').pipe(res);
    } else if (req.url === '/api') {
        res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
        var house = {
            established: 1940,
            name: 'Библиотека',
            floors: 7,
            isWorking: true
        };
        res.end(JSON.stringify(house));
    } else {
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});


server.listen(3000, '127.0.0.1');
console.log("Мы отслеживаем порт 3000");

