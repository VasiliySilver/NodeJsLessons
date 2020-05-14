// var fs = require('fs');
//
// var file_reded = fs.readFileSync('text.txt', 'utf8');
// console.log(file_reded);
// var message = "Привет мир!\n" + file_reded;
// fs.writeFileSync('some_new_file', message);

var fs = require('fs');

var file_readed = fs.readFile('text.txt', 'utf8', function (err, data) {
    console.log(data);
});

var file_readed = fs.writeFile('some.txt', 'Hi, you are write me!', function (err, data) {});

console.log("Test");