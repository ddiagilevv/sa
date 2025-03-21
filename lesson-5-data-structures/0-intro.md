

## классификация типов данных в javascript по способу хранения

1. Примитивные (Primitive) типы

Хранятся по значению (в стеке/Stack), изменяются только при присвоении нового значения.
(передаются по значению - значит при копировании создаётся *независимая копия*)

    Number – числа (целые и с плавающей точкой)
    BigInt – большие числа (добавлен в ES11)
    String – строки (неизменяемые последовательности символов)
    Boolean – логические значения (true и false)
    Undefined – значение, указывающее на отсутствие значения
    Null – значение отсутствующего объекта
    Symbol – уникальные идентификаторы (добавлен в ES6)


2. Ссылочные (Reference) типы

Хранятся по ссылке (в куче/Heap), передаются по ссылке, то есть при присвоении переменной копируется не сам объект, а ссылка на него. Изменение одного объекта отразится на всех переменных, указывающих на него.

    Object – базовый тип для всех объектов
    Array – массивы
    Function – функции (в JavaScript функции – это объекты)
    Date – даты и время
    RegExp – регулярные выражения
    Map, Set, WeakMap, WeakSet – коллекции


пример различий
```js
let a = 10;
let b = a; // копируется значение (10)
b = 20;
console.log(a); // 10 (остался неизменным)

let obj1 = { name: "Alice" };
let obj2 = obj1; // копируется ссылка на объект
obj2.name = "Bob";
console.log(obj1.name); // "Bob" (объект изменился)
```

3. Понятие ссылки в js

В JavaScript ссылочные типы данных (объекты, массивы, функции) не хранятся непосредственно в переменной. Вместо этого в переменной сохраняется ссылка (адрес в памяти), указывающая на объект, находящийся в куче (heap).

Когда мы присваиваем переменной объект, в стеке (stack) сохраняется адрес памяти, где находится сам объект в куче (heap).

пример работы ссылок
```js
let obj1 = { name: "Alice" }; // Объект создаётся в heap
let obj2 = obj1;  // obj2 получает ссылку на obj1
obj2.name = "Bob"; 

console.log(obj1.name); // "Bob" (изменилось в обоих переменных)
console.log(obj2.name); // "Bob"
```


4. Передача по ссылке vs Передача по значению

Передача примитивов:
```js
let a = 10;
let b = a;  // Копируется значение
b = 20;

console.log(a); // 10
console.log(b); // 20
```

 a и b независимы, так как работают с копией значения.

Передача объектов:
```js
let obj1 = { name: "Alice" };
let obj2 = obj1;  // obj2 получает ссылку на obj1
obj2.name = "Bob";

console.log(obj1.name); // "Bob"
console.log(obj2.name); // "Bob"
```

 obj1 и obj2 указывают на один объект, поэтому изменения видны в обеих переменных.


5. Как можно сделать "копию", а не ссылку?

Если нам нужно скопировать объект, а не передавать ссылку, можно использовать:

 Глубокое копирование (Deep Copy)
Используем structuredClone() (Node.js 17+):

```js
let obj1 = { name: "Alice" };
let obj2 = structuredClone(obj1);

obj2.name = "Bob";
console.log(obj1.name); // "Alice" (остался неизменным)
```


  Глубокое копирование с JSON (работает для простых объектов)
```js
let obj1 = { name: "Alice" };
let obj2 = JSON.parse(JSON.stringify(obj1));

obj2.name = "Bob";
console.log(obj1.name); // "Alice"
```

```js
let obj1 = { name: "Alice" };
let obj2 = { ...obj1 };  // spread-оператор

obj2.name = "Bob";
console.log(obj1.name); // "Alice"
```
Object.assign() и { ...obj } делают только поверхностную копию (не копируют вложенные объекты).


6. Garbage Collection (Сборка мусора) в Node.js

Node.js (V8) использует алгоритм "Mark-and-Sweep", чтобы удалять объекты, на которые больше нет ссылок.

🔹 Когда объект удаляется из памяти?

```js
let obj = { name: "Alice" };
obj = null; // Теперь объект может быть удалён GC
```

*Подводные камни работы со ссылками

  Ошибка изменения общего объекта:

```js
function change(obj) {
  obj.name = "Bob";
}

let user = { name: "Alice" };
change(user);

console.log(user.name); // "Bob" (изменился, потому что передавался по ссылке)
```
