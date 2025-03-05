class Animal:
    def __init__(self, name, age):
        self.__name = name
        self.__age = age

    @property
    def name(self):
        return self.__name

    @name.setter
    def name(self, value):
        self.__name = value

    @property
    def age(self):
        return self.__age

    @age.setter
    def age(self, value):
        self.__age = value

    def speak(self):
        raise NotImplementedError("Этот метод должен быть переопределён в наследнике.")

class Cat(Animal):
    def __init__(self, name, age):
        super().__init__(name, age)

    def speak(self):
        print(f"{self.name} мяукает!")

    def purr(self):
        print(f"{self.name} мурлычет.")


if __name__ == "__main__":
    cat = Cat("Барсик", 3)
    print("Имя кота:", cat.name)
    print("Возраст кота:", cat.age)

    cat.speak()
    cat.purr()

    cat.age = 4
    cat.name = "Мурзик"

    print("\nПосле изменения данных через сеттеры:")
    print("Новое имя кота:", cat.name)
    print("Новый возраст кота:", cat.age)
