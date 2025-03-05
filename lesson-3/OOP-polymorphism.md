# Полиморфизм
> от греч.:
> πολὺ- — много
> μορφή — форма

[ПОСЛУШАЙ И ПОЙМЕШЬ СРАЗУ](https://www.youtube.com/watch?v=Mh5bxF9as7s)

### Полиморфизм подтипов (через наследование и переопределение)
 - классический вид полиморфизма в ООП

*пример:*
Один метод speak(), разные реализации
```js
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} издает звук`);
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this.name}: Мяу!`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name}: Гав!`);
    }
}

// Используем один и тот же метод для разных объектов
let animals = [new Cat("Барсик"), new Dog("Шарик"), new Animal("Неизвестное существо")];

animals.forEach(animal => animal.speak());

```

### Ad-hoc полиморфизм (перегрузка функций / function overloading)

Пример из Java:

```java
class MathUtils {
    // В Java перегрузка методов реализована на уровне языка: 
    // можно объявлять методы с одним именем, но разными параметрами.


    // Ниже - перегруженные методы с разными параметрами:

    // Метод для сложения двух чисел (int)
    static int add(int a, int b) {
        return a + b;
    }

    // Метод для сложения трех чисел (int)
    static int add(int a, int b, int c) {
        return a + b + c;
    }

    // Метод для сложения двух чисел (double)
    static double add(double a, double b) {
        return a + b;
    }

    public static void main(String[] args) {
        System.out.println(add(5, 10));       // Вывод: 15 (int)
        System.out.println(add(5, 10, 20));   // Вывод: 35 (int)
        System.out.println(add(5.5, 10.3));   // Вывод: 15.8 (double)
    }
}

```

#### В JavaScript нет встроенной перегрузки методов, но можно имитировать ее с помощью аргументов.
```js
function greet(name) {
    if (typeof name === "string") {
        console.log(`Привет, ${name}!`);
    } else if (Array.isArray(name)) {
        name.forEach(n => console.log(`Привет, ${n}!`));
    } else {
        console.log("Привет, незнакомец!");
    }
}

greet("Анна"); // "Привет, Анна!"
greet(["Иван", "Мария"]); // "Привет, Иван!", "Привет, Мария!"
greet(); // "Привет, незнакомец!"

```

### Параметрический полиморфизм (Generics, обобщенные функции)
один код работает с разными типами данных
Функция identity() принимает любой тип данных и просто его возвращает.
```js
function identity(value) {
    return value;
}

console.log(identity(42));       // 42 (число)
console.log(identity("Привет")); // "Привет" (строка)
console.log(identity([1, 2, 3])); // [1, 2, 3] (массив)

```

### Полиморфизм через объекты
разные объекты имеют один и тот же метод, но ведут себя по-разному
похоже на полиморфизм подтипов, но без наследования

```js
let cat = {
    name: "Барсик",
    speak: function() {
        console.log(`${this.name}: Мяу!`);
    }
};

let dog = {
    name: "Шарик",
    speak: function() {
        console.log(`${this.name}: Гав!`);
    }
};

let bird = {
    name: "Говорун",
    speak: function() {
        console.log(`${this.name}: ПТИЦА ГОВОРУН ОТЛИЧАЕТСЯ УМОМ И СООБРАЗИТЕЛЬНОСТЬЮ!`);
    }
};

// Один и тот же метод `speak()`, но разные объекты
let animals = [cat, dog, bird];

animals.forEach(animal => animal.speak());

```

### Полиморфизм через duck typing
 - JavaScript – динамический язык, поэтому тип объекта не важен, если он имеет нужные методы.

 - Если объект "выглядит" как нужный тип, он считается подходящим.

 ```js
function makeSpeak(animal) {
    if (animal.speak) {
        animal.speak();
    } else {
        console.log("Этот объект не умеет говорить");
    }
}

let duck = { name: "Дональд", speak: () => console.log("Кря-кря!") };
let car = { name: "Феррари", beep: () => console.log("Бип-бип!") };

makeSpeak(duck); // "Кря-кря!"
makeSpeak(car);  // "Этот объект не умеет говорить"

 ```
`makeSpeak()` не проверяет, является ли объект уткой, оно просто вызывает 
`speak()`, если он есть.

Это duck typing: 
> Если оно говорит как утка и ходит как утка – значит, это утка

---