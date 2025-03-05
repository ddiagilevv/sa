const fs = require("fs");
const readline = require("readline-sync");

class Cat {
    #password;

    constructor(password, name, age, color, speakSound, actionDescription) {
        this.id = Date.now().toString();
        this.#password = password;
        this.name = name;
        this.age = age;
        this.color = color;
        this.speakSound = speakSound;
        this.actionDescription = actionDescription;
    }

    speak() {
        console.log(`${this.name}: ${this.speakSound}`);
    }

    action() {
        console.log(`${this.name} ${this.actionDescription}`);
    }

    checkPassword(password) {
        return this.#password === password;
    }

    toJSON() {
        return {
            id: this.id,
            password: this.#password,
            name: this.name,
            age: this.age,
            color: this.color,
            speakSound: this.speakSound,
            actionDescription: this.actionDescription,
        };
    }

    static fromJSON(obj) {
        return new Cat(obj.password, obj.name, obj.age, obj.color, obj.speakSound, obj.actionDescription);
    }
}

const dataFile = "cats.json";
let cats = loadCats();

function loadCats() {
    if (fs.existsSync(dataFile)) {
        let rawData = JSON.parse(fs.readFileSync(dataFile, "utf8"));
        return rawData.map(Cat.fromJSON);
    }
    return [];
}

function saveCats() {
    fs.writeFileSync(dataFile, JSON.stringify(cats.map(cat => cat.toJSON()), null, 2));
}

function startProgram() {
    let id = readline.question("Введите ID кота: ");
    let password = readline.question("Введите пароль: ");

    if (id === "admin" && password === "admin") {
        adminPanel();
    } else {
        let cat = cats.find(c => c.id === id);
        if (cat && cat.checkPassword(password)) {
            console.log(`Добро пожаловать, ${cat.name}!`);
        } else {
            console.log("Неверные учетные данные!");
        }
    }
}

function adminPanel() {
    while (true) {
        let command = readline.question("Введите команду (register, edit, delete, list, exit): ").toLowerCase();
        
        if (command === "exit") {
            saveCats();
            console.log("Изменения сохранены. Программа завершена.");
            break;
        }

        switch (command) {
            case "register":
                registerCat();
                break;
            case "edit":
                editCat();
                break;
            case "delete":
                deleteCat();
                break;
            case "list":
                listCats();
                break;
            default:
                console.log("Неизвестная команда. Попробуйте снова.");
        }
    }
}

function registerCat() {
    let password = readline.question("Введите пароль кота: ");
    let name = readline.question("Введите имя кота: ");
    let age = parseInt(readline.question("Введите возраст кота: "));
    let color = readline.question("Введите цвет кота: ");
    let speakSound = readline.question("Введите звук, который издает кот: ");
    let actionDescription = readline.question("Введите описание действия кота: ");
    
    let newCat = new Cat(password, name, age, color, speakSound, actionDescription);
    cats.push(newCat);
    console.log("Кот успешно зарегистрирован! ID: " + newCat.id);
}

function editCat() {
    let id = readline.question("Введите ID кота, которого хотите изменить: ");
    let cat = cats.find(c => c.id === id);
    if (!cat) {
        console.log("Кот с таким ID не найден!");
        return;
    }
    
    cat.name = readline.question(`Новое имя (${cat.name}): `) || cat.name;
    cat.age = parseInt(readline.question(`Новый возраст (${cat.age}): `)) || cat.age;
    cat.color = readline.question(`Новый цвет (${cat.color}): `) || cat.color;
    cat.speakSound = readline.question(`Новый звук (${cat.speakSound}): `) || cat.speakSound;
    cat.actionDescription = readline.question(`Новое действие (${cat.actionDescription}): `) || cat.actionDescription;
    
    console.log("Данные кота обновлены!");
}

function deleteCat() {
    let id = readline.question("Введите ID кота, которого хотите удалить: ");
    let index = cats.findIndex(c => c.id === id);
    if (index === -1) {
        console.log("Кот с таким ID не найден!");
        return;
    }
    
    cats.splice(index, 1);
    console.log("Кот успешно удален!");
}

function listCats() {
    if (cats.length === 0) {
        console.log("Список котов пуст.");
    } else {
        cats.forEach(cat => {
            console.log(`${cat.id}: ${cat.name}, ${cat.age} лет, ${cat.color}, ${cat.speakSound}, ${cat.actionDescription}`);
        });
    }
}

startProgram();
