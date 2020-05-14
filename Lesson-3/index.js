function test() {
    console.log("Привет!");
}

test();

function call(func) {
    func();
}

var printSomthing = function () {
    console.log("Просто текст");
};

// printSomthing();

call(printSomthing);