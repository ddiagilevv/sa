// Stack | LIFO

class StackNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null; // вершина стека
        this.size = 0;
    }

    // добавить элемент на вершину стека
    push(value) {
        const newNode = new StackNode(value);
        newNode.next = this.top; // новый узел указывает на вершину стека
        this.top = newNode; // вставленная вершина теперь вершина стека
        this.size++;
    }

    // удалить элемент с вершины стека
    pop(){
        if (this.isEmpty()){
            console.log(`Стек пуст!`);
            return null;
        }

        const removed = this.top;
        this.top = this.top.next; // вершиной становится следующий узел
        this.size--;
        return removed.value;
    }

    // посмотреть верхушку стека
    peek(){
        return this.isEmpty() ? null : this.top.value;
    }

    isEmpty() {
        return this.size === 0; // если size === 0 - true; инчае - false
    }    

    getSize(){
        return this.size;
    }

    //вывести стек
    print() {
        if (this.isEmpty()){
            console.log(`Стек пуст!`);
            return null;
        }

        let current = this.top;
        let output = "";
        while (current) {
            output += current.value + (current.next ? "->" : "");
            current = current.next;
        }

        console.log(output);
    }
}