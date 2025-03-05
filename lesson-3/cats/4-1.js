class Cat {
    #passportNumber;
    #password;

    constructor(passportNumber, name, age, color, speakSound, actionDescription) {
        this.#passportNumber = passportNumber;
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

    // Геттер для пароля (запрещает его получение)
    get password() {
        return "Доступ запрещен";
    }

    // Сеттер для пароля
    set password(newPassword) {
        this.#password = newPassword;
        console.log("Пароль успешно установлен.");
    }

    // Геттер для номера паспорта (теперь просто возвращает его)
    get passportNumber() {
        return this.#passportNumber;
    }

    // Сеттер для номера паспорта (разрешает изменение без пароля)
    set passportNumber(newPassportNumber) {
        this.#passportNumber = newPassportNumber;
        console.log("Номер паспорта успешно обновлен.");
    }

    // Метод для проверки пароля
    checkPassword(password) {
        return this.#password === password;
    }
}

// Создание объектов котов
let cat_001 = new Cat("ABC001", "Yaqub Qamar Ad-Din Dabiazah", 2, "рыжий", "Мяу!", "крадётся....");
let cat_002 = new Cat("BCD002", "Khalid Kashimiri", 3, "серый", "Хшшшхшшш!", "спит");
let cat_003 = new Cat("EFG003", "Khidir Karawita", 1, "серый", "МЯУ!!!", "крадётся....");
let cat_004 = new Cat("HIJ004", "Ismail Ahmad Kanabawi", 1, "серый", "МЯУ!!!", "крадётся....");
let cat_005 = new Cat("KLM005", "Usman Abdul Jalil Sisha", 1, "белый", "МЯЯЯЯУУУУУ!!!", "сносит вазу с подоконника");

// Устанавливаем пароль через сеттер
cat_005.password = "1234";

// Пытаемся получить пароль (но он недоступен)
console.log(cat_005.password); // "Доступ запрещен"

// Теперь можно получить номер паспорта без пароля
console.log(cat_005.passportNumber); // "KLM005"

// Можно изменить номер паспорта без пароля
cat_005.passportNumber = "NEW005";
console.log(cat_005.passportNumber); // "NEW005"
