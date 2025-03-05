class Cat {
    constructor(name, age, color, speakSound, actionDescription) {
        this.id = Date.now().toString(); // создаем уникальный ID на основе timestamp
        this.name = name;
        this.age = age;
        this.color = color;
        this.speakSound = speakSound;
        this.actionDescription = actionDescription;
    }

    speak() {
        console.log(` ${this.name}: ${this.speakSound}`);
    }

    action() {
        console.log(`${this.name} ${this.actionDescription}`);
    }
}


//let cat1 = new Cat("Барсик")

// Создание объектов котов
let cat_001 = new Cat("Барсик", 2, "рыжий", "Мяу!", "крадётся....");
let cat_002 = new Cat("Мурзик", 2, "рыжий", "Мяу!", "крадётся....");
//let cat_002 = new Cat("Usman Abdul Jalil Sisha", 1, "белый", "МЯЯЯЯУУУУУ!!!", "сносит вазу с подоконника");
//let cat_003 = new Cat("Muhammad Sumbul", 5, "белый", "мрррррхрврз", "обдирает мебель");
// ... и так далее

console.log(cat_001); // cat_001 - ссылка на область в памяти где хранится объект cat_001

// Мы можем это проверить так:
let anotherCat = cat_001; // на самом деле anotherCat это лишь ссылка на ту же область в памяти где хранится cat_001

console.log(anotherCat);

// мы можем проверить является ли объект экземпляром класса Cat
// instanceof

console.log(cat_001 instanceof Cat); // true
console.log(cat_001 instanceof Object); // true потому что объекты наследуются от класса Object

// мы можем узнать к какому классу относится объект
console.log(cat_001.constructor.name); // "Cat"

console.log("-------------"); 

console.log(cat_001);