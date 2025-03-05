class Cat {
    constructor(name, age, color, speakSound, actionDescription) {
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
}



// Создание объектов котов
let cat_001 = new Cat("Yaqub Qamar Ad-Din Dabiazah", 2, "рыжий", "Мяу!", "крадётся....");
let cat_002 = new Cat("Usman Abdul Jalil Sisha", 1, "белый", "МЯЯЯЯУУУУУ!!!", "сносит вазу с подоконника");
let cat_003 = new Cat("Muhammad Sumbul", 5, "белый", "мрррррхрврз", "обдирает мебель");
// ... и так далее

console.log(cat_003.age);
