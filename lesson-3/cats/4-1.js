class Cat {
    #passportnumber;
    #password;
    constructor(passportnumber, name, age, color, speakSound, actionDescription) {
        this.#passportnumber = passportnumber;
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

    setpassword(pass) {
        this.#password = pass;
    }

    getpassportnumber(pass) {
        if (pass === this.#password){
            console.log(this.#passportnumber)
        } else console.log("Incorrect password")
    }
}

// Создание объектов котов
let cat_001 = new Cat("ABC001", "Yaqub Qamar Ad-Din Dabiazah", 2, "рыжий", "Мяу!", "крадётся....");
let cat_002 = new Cat("BCD002", "Khalid Kashimiri", 3, "серый", "Хшшшхшшш!", "спит");
let cat_003 = new Cat("EFG003", "Khidir Karawita", 1, "серый", "МЯУ!!!", "крадётся....");
let cat_004 = new Cat("HIJ004", "Ismail Ahmad Kanabawi", 1, "серый", "МЯУ!!!", "крадётся....");
let cat_005 = new Cat("KLM005", "Usman Abdul Jalil Sisha", 1, "белый", "МЯЯЯЯУУУУУ!!!", "сносит вазу с подоконника");
let cat_006 = new Cat("NOP006", "Muhammad Sumbul", 1, "белый", "мрррррхрврз", "обдирает мебель");
let cat_007 = new Cat("QRS007", "Hamza Al-Faruqi", 4, "черный", "урчит...", "наблюдает за птицами в окне");
let cat_008 = new Cat("TUV008", "Ibrahim Al-Salim", 2, "черный", "КРЯУ!", "носится по квартире, как сумасшедший");
let cat_009 = new Cat("WXY009", "Omar Al-Rashid", 3, "белый с черными пятнами", "урчание...", "растягивается на солнце");
let cat_010 = new Cat("ZAB010", "Abdul Rahman Al-Majid", 5, "шоколадный", "громкое мяу!", "смотрит в глаза и просит еду");
let cat_011 = new Cat("CDE011", "Yusuf Al-Muntasir", 2, "серый полосатый", "Хрррр...", "спит на подушке хозяина");
let cat_012 = new Cat("FGH012", "Ali Ibn Abbas", 1, "рыже-белый", "мяяяяу!", "прячется под кроватью");
let cat_013 = new Cat("IJK013", "Jamal Al-Bashir", 4, "черепаховый", "громкое муррр!", "царапает дверной косяк");
let cat_014 = new Cat("LMN014", "Aziz Al-Nasir", 2, "песочный", "мяу...", "охотится на свою тень");
let cat_015 = new Cat("OPQ015", "Bilal Ibn Umar", 3, "белый с серыми пятнами", "фыркает", "гоняет мячик по комнате");
let cat_016 = new Cat("RST016", "Tariq Al-Hakim", 5, "черный с белыми лапами", "мяф!", "наблюдает за людьми с высока");
let cat_017 = new Cat("UVW017", "Rashid Ibn Sa'id", 1, "дымчатый", "шипит!", "убегает при виде пылесоса");
let cat_018 = new Cat("XYZ018", "Suleiman Ibn Karim", 3, "серебристый", "урррр...", "переворачивает чашку с водой");
let cat_019 = new Cat("ABC019", "Ilyas Al-Fahim", 4, "голубой", "мрмрм!", "валяется на ковре");
let cat_020 = new Cat("DEF020", "Nasir Ibn Khalaf", 2, "рыжий полосатый", "Мяяяу!", "ловит воображаемую мышь");
let cat_021 = new Cat("GHI021", "Harun Al-Muhtadi", 3, "темно-серый", "тихое урчание", "лежит, задумчиво глядя в окно");
let cat_022 = new Cat("JKL022", "Faris Ibn Rashad", 1, "песочный с белым", "Хррр!", "прячется в коробке");
let cat_023 = new Cat("MNO023", "Zayd Al-Hassan", 4, "темно-рыжий", "злобное шипение", "атакует ноги хозяина");
let cat_024 = new Cat("PQR024", "Qasim Al-Jabbar", 3, "белый с голубыми глазами", "мяу-мяу", "смотрит на зеркало, недоумевая");
let cat_025 = new Cat("STU025", "Bassam Ibn Malik", 2, "темно-шоколадный", "мурмяу!", "бросается на игрушку");
let cat_026 = new Cat("VWX026", "Yunus Al-Karim", 5, "серо-голубой", "мрррмяу!", "греется на батарее");


// Проверка работы (пример)
//cat_001.speak(); // Yaqub Qamar Ad-Din Dabiazah: Мяу!
//console.log(cat_021.name);
//console.log(cat_021.passportnumber);
//cat_021.getpassportnumber(123);
//cat_005.action(); // Usman Abdul Jalil Sisha сносит вазу с подоконника

cat_005.setpassword(1234);

cat_005.getpassportnumber(12);
console.log(cat_005.passportnumber);
cat_005.getpassportnumber(1234);