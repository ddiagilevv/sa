// Абстрактный класс Animal
abstract class Animal {
    private String name;
    private int age;

    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Геттер и сеттер для name
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    // Геттер и сеттер для age
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }

    // Абстрактный метод
    public abstract void speak();
}

// Класс Cat наследует Animal
class Cat extends Animal {
    public Cat(String name, int age) {
        super(name, age);
    }

    @Override
    public void speak() {
        System.out.println(getName() + " мяукает!");
    }

    public void purr() {
        System.out.println(getName() + " мурлычет.");
    }
}

// Тестовый класс
public class Main {
    public static void main(String[] args) {
        Cat cat = new Cat("Барсик", 3);

        System.out.println("Имя кота: " + cat.getName());
        System.out.println("Возраст кота: " + cat.getAge());

        cat.speak();
        cat.purr();

        cat.setAge(4);
        cat.setName("Мурзик");

        System.out.println("\nПосле изменения данных через сеттеры:");
        System.out.println("Новое имя кота: " + cat.getName());
        System.out.println("Новый возраст кота: " + cat.getAge());
    }
}
