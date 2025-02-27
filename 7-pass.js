const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Введите пароль: ", function(password) {
    if (password === "1234") {
        console.log("Доступ разрешен!");
    } else {
        console.log("Неверный пароль!");
    }
    rl.close();
});
