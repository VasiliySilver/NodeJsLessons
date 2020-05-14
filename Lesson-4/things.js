var array_counter = function(array) {
    return "Вмассиве находятся " + array.length + " элементов!"
};

var multiply = function(x, y) {
    return `${x} умножить ${y} равно ${x*y}`;
};

var some_value = 451;

module.exports = {
    array_counter: array_counter,
    multiply: multiply,
    some_value:some_value
};

// module.exports.array_counter = function(array) {
//     return "Вмассиве находятся " + array.length + " элементов!"
// };
//
// module.exports.multiply = function(x, y) {
//     return `${x} умножить ${y} равно ${x*y}`;
// }
//
// module.exports.some_value = 451;