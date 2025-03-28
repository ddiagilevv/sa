// Deque - Double-Ended Queue

class DequeNode {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Deque {
    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    addFront(value){
        const newNode = new DequeNode(value);

        if (this.isEmpty()){
            this.front = this.rear = newNode;
        } else {
            newNode.next = this.front;
            this.front.prev = newNode;
            this.front = newNode;
        }

        this.size++;
    }

    addBack(){
        const newNode = new DequeNode(value);

        if (this.isEmpty()){
            this.front = this.rear = newNode;
        } else {
            newNode.prev = this.rear;
            this.rear.next = newNode;
            this.rear = newNode;
        }

        this.size++;
    }

    removeFront(){
        if (this.isEmpty()){
            console.log(`Двусторонняя очередь пуста!`);
            return null;
        }

        const removed = this.front;

        if (this.front === this.rear){
            this.front = this.rear = null;
        } else {
            this.front = this.front.next;
            this.front.prev = null;
        }
    }

    removeBack(){
        if (this.isEmpty()){
            console.log(`Двусторонняя очередь пуста!`);
            return null;
        }

        const removed = this.rear;

        if (this.front === this.rear){
            this.front = this.rear = null;
        } else {
            this.rear = this.rear.next;
            this.rear.next = null;
        }
    }

    peekFront(){
        return this.isEmpty() ? null : this.front.value;
    }

    peekBack(){
        return this.isEmpty() ? null : this.rear.value;
    }

    isEmpty(){
        return this.size === 0; // если size === 0 - true; инчае - false
    }

    getSize(){
        return this.size;
    }

    print(){
        if (this.isEmpty()){
            console.log(`Двусторонняя очередь пуста!`);
            return null;
        }

        let current = this.front;
        let output = "";
        while (current) {
            output += current.value + (current.next ? "->" : "");
            current = current.next;
        }

        console.log(output);
    }
}