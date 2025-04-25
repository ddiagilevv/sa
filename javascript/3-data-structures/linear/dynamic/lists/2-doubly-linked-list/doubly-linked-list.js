class DoubleNode {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Проверка, пуст ли список
    isEmpty(){
        return this.size  === 0;
    }

    getSize(){
        return this.size;
    }

    // вставка в конец
    append(value){
        const newNode = new DoubleNode(value);

        if (this.isEmpty()) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            console.log("индекс вне границ");
            return null;
        }

        let removedNode;

        if (index === 0){
            removedNode = this.head;
            this.head = this.head.next;
            if (this.head){ //это проверка, существует ли this.head, если this.head НЕ: - null, -undefined, - 0, - NaN, - "", то true, иначе false
                this.head.prev = null;
            } else {
                this.tail = null;
            }
        } else if (index === this.size - 1){
            removedNode = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            let current = this.head;
            let i = 0;
            while (i < index) {
                current = current.next;
                i++;
            }
            removedNode = current;
            const previous = current.prev;
            const next = current.next;

            previous.next = next;
            next.prev = previous;
        }
        this.size--;
        return removedNode.value;
    }

    search(value){
        let current = this.head;
        while (current) {
            if (current.value === value) {
                console.log(`Найденное значение ${current.value}`);
                return true;
            }
            current = current.next;
        }
        return false;
    }

    print(){
        if (this.isEmpty()) {
            console.log(`Список пуст`);
            return;
        }
        let current = this.head;
        let values = "";

        while (current) {
            values += current.value + (current.next ? "<->" : "");
            current = current.next;
        }

        console.log(values);
    }

    reverse(){
        if (this.isEmpty()) {
            console.log(`Список пуст`);
            return;
        } else if (this.size === 1) {
            console.log(`Список имеет всего один элемент`);
            return;
        }

        let current = this.head;

        let tempHead = this.head;
        this.head = this.tail;
        this.tail = tempHead;
        
        while (current) {
            let temp = current.next;
            current.next = current.prev;
            current.prev = temp;

            current = current.prev;
        }
    }

}

const list = new DoublyLinkedList();

list.append("0");
list.append("1");
list.append(2);
list.append(3);
list.append(4);
list.append(5);

list.reverse();
list.print();