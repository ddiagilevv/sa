// Queue - FIFO

class QueueNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new QueueNode(value);

        if (this.isEmpty()){
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }

        this.size++;
    }

    dequeue(){
        if (this.isEmpty()){
            console.log(`Очередь пуста!`);
            return null;
        }

        const removed = this.front;

        this.front = this.front.next;
        if (!this.front) {
            this.rear = null;
        }

        this.size--;
        return removed.value;
    }

    // посмотреть кто первый в очереди
    peek(){
        return this.isEmpty() ? null : this.front.value;
    }
    
    isEmpty() {
        return this.size === 0; // если size === 0 - true; инчае - false
    }

    getSize(){
        return this.size;
    }

    print(){
        if (this.isEmpty()){
            console.log(`Очередь пуста!`);
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