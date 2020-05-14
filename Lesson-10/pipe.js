/*                      РАБОТА С ПОТОКАМИ
* ЧТОБЫ ПОЛЬЗОВАТЕЛЬ НЕ ДОЖИДАЛСЯ ПОКА ЗАГРУЗИТЬСЯ ВЕСЬ ФАЙЛ
* */


var fs = require('fs');

// читаем файл и помещаем в переменную маленькими кусками
// удобно для html страниц  большим количеством информации
var myReadShort = fs.createReadStream(__dirname + '/lorem.txt', 'utf8');
// записываем данные в файл news.txt
var myWriteShort = fs.createWriteStream(__dirname + '/news.txt');

myReadShort.pipe(myWriteShort);