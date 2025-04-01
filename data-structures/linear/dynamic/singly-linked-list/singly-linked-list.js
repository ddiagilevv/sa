// Класс Node - узел списка
// Каждый узел хранит некоторое значение `value` и ссылку `next` на следующий узел 
class Node{
    constructor(value){
        this.value = value;
        
        // устанавливаем ссылку на следующий узел в null по умолчанию
        this.next = null; // узел "Смотрит" в одну строну
    }
}

// Класс LinkedList - односвязный список
class LinkedList {
    constructor(){
        // head - ссылка на первый узел списка
        // если список пуст - head = null
        this.head = null;

        // size - количество узлов в списке
        this.size = 0;
    }

    // возвращает true если список пуст
    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    // 1) создаем новый узел
    // 2) проверяем пуст ли список. Если пуст - то "делаем его" head-ом
    // 3.1) Если не пуст - доходим до последнего узла 
    //  3.2) и "прицепляем" новый узел
    append(value){
        //1)
        const newNode = new Node(value);

        //2)
        if (this.isEmpty()){
            this.head = newNode;
        //3.1)
        } else {
            // временная переменная `current` указывающая на элемент списка 
            // (в момент начала работы цикла она "смотрит" нга начало списка)
            let current = this.head;

            // Идем, по узлам списка, пока не дойдем до последнего узла
            // последний узел это узел у которого next = null
            while (current.next !== null){
                current = current.next;
            }

            // 3.2)
            current.next = newNode;
        }
        this.size++;
    }

    // можно сделать вставку в начало (но я не сделал)

    //remove(value)
    //search(value)
}

const list = new LinkedList();

list.append(1234);
list.append(234564);
list.append(1234);
list.append(234564);
list.append(1234);
list.append(234564);

console.log(list.getSize());