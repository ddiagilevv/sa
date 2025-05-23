# функции в js

Функция в JavaScript (и в большинстве других языков) — это блок кода, который можно вызывать многократно

Функции позволяют:
 - Избежать дублирования кода.
 - Логически разделять логику программы на небольшие «кирпичики».
 - Упрощать чтение и поддержку кода.

 ```js
function sayHello() {
  console.log("Hello world");
}

sayHello();

 ```

## объявление функции

1. function declaration
   - function greet() { ... }
   - имеет полноценное имя, поднимается (hoisting), можно вызывать до объявления.
2. function expression
   - const greet = function() { ... };
   - функция присваивается переменной, не поднимается в плане значения (только имя переменной).
   - нельзя вызвать до момента объявления.
3. arrow function
   - const greet = () => { ... };
   - имеет более короткий синтаксис, лексический this, нельзя вызвать через new.
   - не поднимается в плане значения (как и Function Expression).
     const x = (p) => { ... }
     - это объявление функции в стрелочной форме. ВНИМАНИЕ! ОБЪЯВЛЕНИЕ!
     x - переменная в которую записывается ф-ция
     const обозн что x не будет переназначена. при этом содержимое х (т.е. функция) может выполнять любые действия
     p - параметр функции. если параметров несколько пишем (p, a, b ...). Мoжет не быть: () =>
     => { ... } стрелочная ф-ция непосредственно. Читаем как: p идет в { ... }. а {...} - тело функции

     const x = (p) => { ... } - создает функцию которую мы можем вызвать ПОЗЖЕ
     let p = 5;
     например: x(p);

     однострочная стрелка:
     const square = n => n*n;

     Также, arrow function не имеют собственного this 


4. named function expression
   - const greet = function greetFunc() { ... };
   - как Function Expression, но внутри у функции есть имя (greetFunc), что полезно для рекурсии и отладки.
   - снаружи вызывается по переменной greet.

5. generator functions
6. async functions
7. async generators

## function declaration
Хоистинг (hoisting)
Функция, объявленная таким способом, «поднимается» интерпретатором JavaScript наверх области видимости. Это означает, можно вызвать эту функцию даже до её фактического объявления в коде.

```js
// Можем вызвать функцию даже до её объявления благодаря хоистингу
greet("Вася"); // Выведет: "Привет, Вася!"

function greet(name) {
  console.log("Привет, " + name + "!");
}

// Повторный вызов после объявления
greet("Петя"); // Выведет: "Привет, Петя!"

```

Чтобы вызвать функцию, вы пишете её имя и круглые скобки с нужными аргументами:
имяФункции(аргументы);

Поддержка указания параметров по умолчанию (ES6+):
```js
function sayHello(name = 'Гость') {
  console.log(`Привет, ${name}!`);
}
```

### параметры/аргументы функции

#### параметры - переменные объявляемы при определении

```js
function greet(name) { // параметр функции
    console.log(`Привет, ${name}!. Приятно познакомиться`);
}
```
#### аргументы

greet ('Петя'); // 'Петя' - аргумент переданный как параметр в функцию

#### параметры по умолчанию
```js
function greet(name = 'Гость') {
    console.log(`Привет, ${name}`)
}

greet(); //привет, Гость
greet('Анна'); //привет, Анна

```

#### несколько параметров
1)
```js
function sum(a, b){ //a,b - параметры
   return a + b;
}

console.log(sum(5, 5));
```

2) устаревший способ
```js
function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sumAll(1, 2, 3, 4, 5)); // 15
```

3) оператор Rest
```js
function showInfo(name, age, ...hobbies){
    console.log(`Имя ${name}, возраст ${age}`);
    console.log(`Хобби: ${hobbies.join(', ')}`);
} 


showInfo('Анна', 24, 'чтение', 'вокал', 'etc')
```

4) деструктуризация параметров
```js
function showInfo({name, age}){
    console.log(`Имя ${name}, возраст ${age}`);
}

const user = {name: 'Анна', age: 25};
showInfo(user)

```

деструктуризация массива

```js
function getCoordinates([x, y]){
    console.log(`Координаты x=${x}, y=${y}`);
}

const point = [10, 20];
getCoordinates(point);
```

## function expression

Функция присваивается переменной:
```js
const имяПеременной = function(параметры){
    // Тело функции
};

```

Анонимная функция
```js
const sayHello = function(name){
    //вывод на экран
}
sayHello("Вася")
```

## arrow function (стрелочная функция)
const имяПеременной = (параметры) => {
    // тело функции
}

```js
const add = (a, b) => a + b;
```

## named function expression
- частный случай function expression, у функции внутри есть свое собственное имя
например
```js
const factorial = function f(n){
    if (n <= 1) {
        return 1;
    } else {
        // вызов этой же функции через внутренне имя f
        return n * f(n - 1);
    }
};

console.log(factorial(5));
```
