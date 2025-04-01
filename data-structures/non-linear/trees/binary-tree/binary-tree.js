class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);        
        if (this.isEmpty()){
            //если дерево пустое, новый узел становится корнем
            this.root = newNode;
        } else {
            //меньше - идем влево; больше - идем вправо (путем сравнения value с root)
            let current = this.root;
            //поиск места вставки:
            while (true){
                if (value === current.value){
                    console.log(`Добавление дубликата невозможно.`);
                    return undefined;
                    //undefined - специальное значение в javascript, означающее "значение не было присвоено" или "ничего не возвращается"
                    // когда мы можем встретить undefined?
                    // let a; console.log(a);    будет undefined. переменная а инициализированна, но ей не присвоено значение                            
                } else if (value < current.value){
                    // здесь мы проверяем, есть ли у текущего узла левый потомок
                    // цель проверки найти "пустое место", чтобы вставить новый элемент
                    if (!current.left) {
                        current.left = newNode;
                        return newNode.value;
                    }
                    current = current.left;
                } else if (value > current.value) {
                    if (!current.right) {
                        current.right = newNode;
                        return newNode.value;
                    }
                    current = current.right;
                }
                
            }

        }

    } 
}