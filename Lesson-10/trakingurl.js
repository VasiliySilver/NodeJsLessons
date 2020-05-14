/*                                   Отслеживание URL
Выводим файл index.html в случае если пользователь будет находится на главной странице сайта.*/

var server = http.createServer(function(req, res) {
    if(req.url === '/') { // Если главная страница
        // Передаем нужные заголовки
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        // Указываем HTML файл для отображения
        var myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf8');
        // Выполняем отображение
        myReadShort.pipe(res);
    }
});