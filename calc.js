const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Введите первое число: ", (num1) => {
    rl.question("Введите оператор (+, -, *, /): ", (operator) => {
        rl.question("Введите второе число: ", (num2) => {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            let result;

            switch (operator) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    result = num2 !== 0 ? num1 / num2 : "Ошибка: деление на ноль";
                    break;
                default:
                    result = "Ошибка: неверный оператор";
            }

            console.log("Результат:", result);
            rl.close();
        });
    });
});
