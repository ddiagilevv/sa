
//https://www.tiktok.com/@brian_nkk7/video/7423221394487627013

let cat_001 = {
    name: "Yaqub Qamar Ad-Din Dabiazah",
    age: 2,
    color: "рыжий",
    speak: function() {
        console.log(this.name + "Мяу!");
    },
    action: function() {
        console.log(this.name + "крадётся....");
    }
};

let cat_002 = {
    name: "Khalid Kashimiri",
    age: 3,
    color: "серый",
    speak: function() {
        console.log(this.name + "Хшшшхшшш!");
    },
    action: function() {
        console.log(this.name + "спит");
    }
};

let cat_003 = {
    name: "Khidir Karawita",
    age: 1,
    color: "серый",
    speak: function() {
        console.log(this.name + "МЯУ!!!");
    },
    action: function() {
        console.log(this.name + "крадётся....");
    }
};

let cat_004 = {
    name: "Ismail Ahmad Kanabawi",
    age: 1,
    color: "серый",
    speak: function() {
        console.log(this.name + "МЯУ!!!");
    },
    action: function() {
        console.log(this.name + "крадётся....");
    }
};

let cat_005 = {
    name: "Usman Abdul Jalil Sisha",
    age: 1,
    color: "белый",
    speak: function() {
        console.log(this.name + "МЯЯЯЯУУУУУ!!!");
    },
    action: function() {
        console.log(this.name + "сносит вазу с подоконника");
    }
};

let cat_006 = {
    name: "Muhammad Sumbul",
    age: 1,
    color: "белый",
    speak: function() {
        console.log(this.name + "мрррррхрврз");
    },
    action: function() {
        console.log(this.name + "обдирает мебель");
    }
};


let dog = {
    name: "Дружок",
    age: 10,
    color: "black",
    trained_commands: ["сидеть", "лежать", "апорт"],
    speak: function() {
        console.log(this.name + "ГАВ!");
    },
    action: function() {
        console.log(this.name + "бежит");
    }
};


//cat.speak(); // "Барсик говорит: Мяу!"
//dog.speak(); // "Дружок говорит: Гав!"


let animals = [cat_001, cat_002, cat_003, cat_004, cat_005, cat_006, dog];

animals.forEach(animal => {
    console.log("Имя: " + animal.name);
    console.log("Возраст: " + animal.age);
    console.log("Цвет: " + animal.color);

    // Проверяем, есть ли у объекта свойство trained_commands
    if (animal.trained_commands) {
        console.log("Выученные команды: " + animal.trained_commands.join(", "));
    }

    console.log("----------------");
});
