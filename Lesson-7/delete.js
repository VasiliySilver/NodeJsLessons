var fs = require('fs');

// удалить файл
// fs.unlink('text.txt', function () {});

// создать папку
// fs.mkdirSync('new-one');

// удалить папку
// fs.rmdirSync('new-one');

// ассинхронное создание папки и файла в ней
// fs.mkdir('new-one', function () {
//     fs.writeFile('./new-one/some_new.txt', 'Привет мир!', function () {
//         console.log("All is good!");
//     });
// });

// удалить файл с папкой
fs.unlink('./new-one/some_new.txt', function() {
    fs.rmdir('new-one', function() {});
});

// удалить папку, не будет удаляться если внутри находится файл
// fs.rmdir('new-one', function () {});
