// Узел для кольцевого двусвязного списка
class Node {
    constructor(value) {
      this.value = value; // значение узла
      this.next = null;   // ссылка на следующий узел
      this.prev = null;   // ссылка на предыдущий узел
    }
  }
  
  // Кольцевой двусвязный список
  class CircularDoublyLinkedList {
    constructor() {
      this.head = null; // голова списка
      this.size = 0;    // размер списка
    }
  
    // Добавить в конец
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        newNode.next = newNode;
        newNode.prev = newNode;
        this.head = newNode;
      } else {
        const tail = this.head.prev;
        tail.next = newNode;
        newNode.prev = tail;
        newNode.next = this.head;
        this.head.prev = newNode;
      }
      this.size++;
    }
  
    // Добавить в начало
    prepend(value) {
      const newNode = new Node(value);
      if (!this.head) {
        newNode.next = newNode;
        newNode.prev = newNode;
        this.head = newNode;
      } else {
        const tail = this.head.prev;
        newNode.next = this.head;
        newNode.prev = tail;
        tail.next = newNode;
        this.head.prev = newNode;
        this.head = newNode;
      }
      this.size++;
    }
  
    // Удалить узел по значению
    remove(value) {
      if (!this.head) return false;
  
      let current = this.head;
      let found = false;
      let i = 0;
  
      do {
        if (current.value === value) {
          found = true;
          if (this.size === 1) {
            this.head = null;
          } else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
            if (current === this.head) {
              this.head = current.next;
            }
          }
          this.size--;
          break;
        }
        current = current.next;
        i++;
      } while (current !== this.head && i < this.size);
  
      return found;
    }
  
    // Получить узел по индексу
    get(index) {
      if (index < 0 || index >= this.size) return null;
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    }
  
    // Поиск значения
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
      if (!this.head) {
        console.log("(пустой список)");
        return;
      }
      const result = [];
      let current = this.head;
      do {
        result.push(current.value);
        current = current.next;
      } while (current !== this.head);
      console.log(result.join(" <-> ") + " <-> (back to head)");
    }
  
    // Очистка списка
    clear() {
      this.head = null;
      this.size = 0;
    }
  
    // Размер списка
    getSize() {
      return this.size;
    }
  
    // Проверка на пустоту
    isEmpty() {
      return this.size === 0;
    }
  }
  
  // Пример использования:
  const list = new CircularDoublyLinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.print(); // 1 <-> 2 <-> 3 <-> (back to head)
  
  list.prepend(0);
  list.print(); // 0 <-> 1 <-> 2 <-> 3 <-> (back to head)
  
  list.remove(2);
  list.print(); // 0 <-> 1 <-> 3 <-> (back to head)
  
  console.log("Contains 3:", list.contains(3)); // true
  console.log("Get index 1:", list.get(1).value); // 1
  