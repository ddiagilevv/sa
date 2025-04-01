using System;

// Абстрактный класс Animal
public abstract class Animal
{
    private string _name;
    private int _age;

    public Animal(string name, int age)
    {
        _name = name;
        _age = age;
    }

    // Свойства (property) для имени
    public string Name
    {
        get { return _name; }
        set { _name = value; }
    }

    // Свойства (property) для возраста
    public int Age
    {
        get { return _age; }
        set { _age = value; }
    }

    // Абстрактный метод - будет переопределён в наследнике
    public abstract void Speak();
}

// Класс Cat наследуется от Animal
public class Cat : Animal
{
    public Cat(string name, int age) : base(name, age) {}

    public override void Speak()
    {
        Console.WriteLine($"{Name} мяукает!");
    }

    public void Purr()
    {
        Console.WriteLine($"{Name} мурлычет.");
    }
}

public class Program
{
    public static void Main()
    {
        Cat cat = new Cat("Барсик", 3);

        Console.WriteLine("Имя кота: " + cat.Name);
        Console.WriteLine("Возраст кота: " + cat.Age);

        cat.Speak();
        cat.Purr();

        cat.Age = 4;
        cat.Name = "Мурзик";

        Console.WriteLine("\nПосле изменения данных через сеттеры:");
        Console.WriteLine("Новое имя кота: " + cat.Name);
        Console.WriteLine("Новый возраст кота: " + cat.Age);
    }
}
