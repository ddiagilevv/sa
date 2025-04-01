class StaticList {
    constructor(size) {
      this.size = size;
      this.list = new Array(size);
      this.count = 0; // количество добавленных элементов
    }
  
    // Добавление элемента
    add(element) {
      if (this.count >= this.size) {
        throw new Error("List is full. Cannot add more elements.");
      }
      this.list[this.count] = element;
      this.count++;
    }
  
    // Получение элемента по индексу
    get(index) {
      if (index < 0 || index >= this.count) {
        throw new Error("Index out of bounds.");
      }
      return this.list[index];
    }
  
    // Удаление последнего элемента
    remove() {
      if (this.count === 0) {
        throw new Error("List is empty.");
      }
      this.count--;
      const removed = this.list[this.count];
      this.list[this.count] = undefined;
      return removed;
    }
  
    // Текущий размер (занятых элементов)
    length() {
      return this.count;
    }
  
    // Печать содержимого
    print() {
      console.log(this.list.slice(0, this.count));
    }
  }
  