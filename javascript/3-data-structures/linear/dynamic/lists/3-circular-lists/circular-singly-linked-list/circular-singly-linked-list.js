// Узел списка
class Node {
    constructor(value) {
      this.value = value; // значение узла
      this.next = null;   // ссылка на следующий узел
    }
  }
  
  // Кольцевой однонаправленный связанный список
  class CircularSinglyLinkedList {
    constructor() {
      this.head = null;  // голова списка
      this.tail = null;  // хвост (удобно для быстрого добавления)
      this.size = 0;     // размер списка
    }
  
    // Добавить элемент в конец
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        newNode.next = this.head; // замыкаем в кольцо
      } else {
        this.tail.next = newNode;
        newNode.next = this.head;
        this.tail = newNode;
      }
      this.size++;
    }
  
    // Добавить элемент в начало
    prepend(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        newNode.next = this.head;
      } else {
        newNode.next = this.head;
        this.head = newNode;
        this.tail.next = this.head;
      }
      this.size++;
    }
  
    // Удалить элемент по значению
    remove(value) {
      if (!this.head) return false;
  
      let current = this.head;
      let previous = this.tail;
  
      let found = false;
      do {
        if (current.value === value) {
          found = true;
          if (current === this.head) {
            this.head = this.head.next;
            this.tail.next = this.head;
          } else {
            previous.next = current.next;
            if (current === this.tail) {
              this.tail = previous;
            }
          }
          this.size--;
          break;
        }
        previous = current;
        current = current.next;
      } while (current !== this.head);
  
      return found;
    }
  
    // Получить узел по индексу
    get(index) {
      if (index < 0 || index >= this.size) return null;
      let current = this.head;
      let count = 0;
      while (count < index) {
        current = current.next;
        count++;
      }
      return current;
    }
  
    // Поиск по значению
    contains(value) {
      if (!this.head) return false;
      let current = this.head;
      do {
        if (current.value === value) return true;
        current = current.next;
      } while (current !== this.head);
      return false;
    }
  
    // Печать списка
    print() {
      const result = [];
      if (!this.head) {
        console.log("(пустой список)");
        return;
      }
      let current = this.head;
      do {
        result.push(current.value);
        current = current.next;
      } while (current !== this.head);
      console.log(result.join(" -> ") + " -> (back to head)");
    }
  
    // Очистка списка
    clear() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    // Получить размер
    getSize() {
      return this.size;
    }
  
    // Проверка на пустоту
    isEmpty() {
      return this.size === 0;
    }
  }
  
  // Пример использования:
  const list = new CircularSinglyLinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.print(); // 1 -> 2 -> 3 -> (back to head)
  
  list.prepend(0);
  list.print(); // 0 -> 1 -> 2 -> 3 -> (back to head)
  
  list.remove(2);
  list.print(); // 0 -> 1 -> 3 -> (back to head)
  
  console.log("Contains 3:", list.contains(3)); // true
  console.log("Get index 1:", list.get(1).value); // 1
  