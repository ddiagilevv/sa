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
    remove(value) {
        //надо найти узел, где хранится value, удалить его, корректно сохранив структуру дерева
        // 1.узел без детей
        // 2.узел с 1 потомком - меняем удаленный на потомка 
        // 3.узел с 2 потомками - найти минимум в правом поддереве,
        //затем заменить value на этот минимум, затем удалить дубликат минимум
        //в правом поддереве.

        // функция ищет самый левый узел в поддереве, начиная с node 
        function findMin(node) {
            while (node.left !== null){
                node = node.left;
            }
            return node;
        }

        function removeNode(node, value) {
            if (node === null) return null;

            if (value < node.value){
                node.left = removeNode(node.left, value);
                return node;
            } else if (value > node.value){
                node.right = removeNode(node.right, value);
                return node;
            } else {
                if (node.left === null && node.right === null) return null;
                if (node.left === null) return node.right;
                if (node.right === null) return node.left;

                //ищем самый левый узел в ПРАВОМ поддереве
                const minNode = findMin(node.right);
                node.value = minNode.value;
                node.right = removeNode(node.right, minNode.value);
                return node;
            }

        }

        this.root = removeNode(this.root, value);

    } 
}