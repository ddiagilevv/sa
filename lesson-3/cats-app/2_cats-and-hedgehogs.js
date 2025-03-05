const fs = require("fs");
const readline = require("readline-sync");

class Animal {
    constructor(name) {
        this.id = Date.now().toString();
        this.name = name;
    }

    speak() {
        throw new Error("Метод speak() должен быть переопределен");
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
        };
    }
}

class Cat extends Animal {
    #password;

    constructor(password, name, age, color, speakSound, actionDescription) {
        super(name);
        this.#password = password;
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
            ...super.toJSON(),
            password: this.#password,
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

class Hedgehog extends Animal {
    constructor(name, speakSound = "фыр фыр фыр") {
        super(name);
        this.speakSound = speakSound;
    }

    speak() {
        console.log(`${this.name}: ${this.speakSound}`);
    }

    toJSON() {
        return {
            ...super.toJSON(),
            speakSound: this.speakSound,
        };
    }

    static fromJSON(obj) {
        return new Hedgehog(obj.name, obj.speakSound);
    }
}

const dataFile = "animals.json";
let animals = loadAnimals();

function loadAnimals() {
    if (fs.existsSync(dataFile)) {
        let rawData = JSON.parse(fs.readFileSync(dataFile, "utf8"));
        return rawData.map(obj => obj.age ? Cat.fromJSON(obj) : Hedgehog.fromJSON(obj));
    }
    return [];
}

function saveAnimals() {
    fs.writeFileSync(dataFile, JSON.stringify(animals.map(animal => animal.toJSON()), null, 2));
}

function startProgram() {
    let id = readline.question("Введите ID: ");
    let password = readline.question("Введите пароль (если есть): ");

    if (id === "admin" && password === "admin") {
        adminPanel();
    } else {
        let animal = animals.find(a => a.id === id);
        if (animal instanceof Cat && animal.checkPassword(password)) {
            console.log(`Добро пожаловать, ${animal.name}!`);
        } else if (animal instanceof Hedgehog) {
            console.log(`Добро пожаловать, ${animal.name}!`);
        } else {
            console.log("Неверные учетные данные!");
        }
    }
}

function adminPanel() {
    while (true) {
        let command = readline.question("Введите команду (register_cat, register_hedgehog, edit, delete, list, exit): ").toLowerCase();
        
        if (command === "exit") {
            saveAnimals();
            console.log("Изменения сохранены. Программа завершена.");
            break;
        }

        switch (command) {
            case "register_cat":
                registerCat();
                break;
            case "register_hedgehog":
                registerHedgehog();
                break;
            case "edit":
                editAnimal();
                break;
            case "delete":
                deleteAnimal();
                break;
            case "list":
                listAnimals();
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
    animals.push(newCat);
    console.log("Кот успешно зарегистрирован!");
}

function registerHedgehog() {
    let name = readline.question("Введите имя ежа: ");
    let newHedgehog = new Hedgehog(name);
    animals.push(newHedgehog);
    console.log("Еж успешно зарегистрирован!");
}

function editAnimal() {
    let id = readline.question("Введите ID животного, которого хотите изменить: ");
    let animal = animals.find(a => a.id === id);
    if (!animal) {
        console.log("Животное с таким ID не найдено!");
        return;
    }
    
    animal.name = readline.question(`Новое имя (${animal.name}): `) || animal.name;
    if (animal instanceof Cat) {
        animal.age = parseInt(readline.question(`Новый возраст (${animal.age}): `)) || animal.age;
        animal.color = readline.question(`Новый цвет (${animal.color}): `) || animal.color;
        animal.speakSound = readline.question(`Новый звук (${animal.speakSound}): `) || animal.speakSound;
        animal.actionDescription = readline.question(`Новое действие (${animal.actionDescription}): `) || animal.actionDescription;
    }
    console.log("Данные обновлены!");
}

function deleteAnimal() {
    let id = readline.question("Введите ID животного, которого хотите удалить: ");
    let index = animals.findIndex(a => a.id === id);
    if (index === -1) {
        console.log("Животное с таким ID не найдено!");
        return;
    }
    
    animals.splice(index, 1);
    console.log("Животное успешно удалено!");
}

function listAnimals() {
    if (animals.length === 0) {
        console.log("Список животных пуст.");
    } else {
        animals.forEach(animal => {
            console.log(animal instanceof Cat
                ? `${animal.id}: Кот ${animal.name}, ${animal.age} лет, ${animal.color}, ${animal.speakSound}, ${animal.actionDescription}`
                : `${animal.id}: Еж ${animal.name}, ${animal.speakSound}`);
        });
    }
}

startProgram();
