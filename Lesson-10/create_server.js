var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    console.log("URL страницы: " + req.url);
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    var myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf8');
    // выводим текстовый файл на страницу с браузером
    myReadShort.pipe(res);
})

server.listen(3000, '127.0.0.1');
console.log("Мы отслеживаем порт 3000")


//Работа с текстовым файлом text/plain
/*
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    console.log("URL страницы: " + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'});
    var myReadShort = fs.createReadStream(__dirname + '/lorem.txt', 'utf8');
    // выводим текстовый файл на страницу с браузером
    myReadShort.pipe(res);
})

server.listen(3000, '127.0.0.1');
console.log("Мы отслеживаем порт 3000")*/

