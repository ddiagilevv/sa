// Конструктор Animal
function Animal(name, age) {
    this._name = name;
    this._age = age;
  }
  
  // "Геттеры"
  Animal.prototype.getName = function() {
    return this._name;
  };
  
  Animal.prototype.getAge = function() {
    return this._age;
  };
  
  // "Сеттеры"
  Animal.prototype.setName = function(name) {
    this._name = name;
  };
  
  Animal.prototype.setAge = function(age) {
    this._age = age;
  };
  
  // "Абстрактный" метод
  Animal.prototype.speak = function() {
    throw new Error("Метод speak() должен быть переопределён в наследнике.");
  };
  
  // Конструктор Cat (наследник Animal)
  function Cat(name, age) {
    Animal.call(this, name, age); // вызов "конструктора" родителя
  }
  
  // Унаследовать прототип Animal
  Cat.prototype = Object.create(Animal.prototype);
  // Восстановим свойство constructor
  Cat.prototype.constructor = Cat;
  
  // Переопределяем speak()
  Cat.prototype.speak = function() {
    console.log(this.getName() + " мяукает!");
  };
  
  // Дополнительный метод
  Cat.prototype.purr = function() {
    console.log(this.getName() + " мурлычет.");
  };
  
  // Пример использования
  var cat = new Cat("Барсик", 3);
  console.log("Имя кота:", cat.getName());
  console.log("Возраст кота:", cat.getAge());
  
  cat.speak();
  cat.purr();
  
  cat.setName("Мурзик");
  cat.setAge(4);
  
  console.log("\nПосле изменения данных через сеттеры:");
  console.log("Новое имя кота:", cat.getName());
  console.log("Новый возраст кота:", cat.getAge());
  