class Animal {
    constructor(name, age) {
      this._name = name;
      this._age = age;
    }
  
    get name() {
      return this._name;
    }
    set name(value) {
      this._name = value;
    }
  
    get age() {
      return this._age;
    }
    set age(value) {
      this._age = value;
    }
  
    speak() {
      throw new Error("Метод speak() должен быть переопределён в наследнике.");
    }
  }
  
  class Cat extends Animal {
    constructor(name, age) {
      super(name, age);
    }
  
    speak() {
      console.log(this.name + " мяукает!");
    }
  
    purr() {
      console.log(this.name + " мурлычет.");
    }
  }
  
  // Пример использования
  const cat = new Cat("Барсик", 3);
  console.log("Имя кота:", cat.name);
  console.log("Возраст кота:", cat.age);
  
  cat.speak();
  cat.purr();
  
  cat.name = "Мурзик";
  cat.age = 4;
  
  console.log("\nПосле изменения данных через сеттеры:");
  console.log("Новое имя кота:", cat.name);
  console.log("Новый возраст кота:", cat.age);
  