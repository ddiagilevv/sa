# Data Structures

### Структура данных
  — это способ организации, хранения и управления данными в памяти компьютера так, чтобы их можно было эффективно использовать.

Она определяет, как данные связаны между собой, как их можно изменять и какие операции можно выполнять (добавление, удаление, поиск и т. д.).

## 1. Linear Structures  
### 1.1. Dynamic
> Линейная динамическая структура это множество объектов S={Si} | i=1,...,n
> на котором определены отношения предшествования/следования, причем для любого 
> объекта si, i=2,...,n-1 существует единственный “предшественник”
> si-1 и единственный “последователь” si+1. Объект s1 имеет последователя, но
> не имеет предшественника и является первым элементом списка, объект sn
> имеет предшественника, но не имеет последователя и является “хвостом”
> списка. Ситуация n=0 определяет особое состояние: “список пуст”.

источник: [Е.В. Симонова - СТРУКТУРЫ ДАННЫХ В С# Часть I. ЛИНЕЙНЫЕ ДИНАМИЧЕСКИЕ
СТРУКТУРЫ](https://repo.ssau.ru/bitstream/Uchebnye-izdaniya/Struktury-dannyh-v-C-Ch-1-73315/1/%d0%a1%d0%b8%d0%bc%d0%be%d0%bd%d0%be%d0%b2%d0%b0%20%d0%95.%d0%92.%20%d0%a1%d1%82%d1%80%d1%83%d0%ba%d1%82%d1%83%d1%80%d1%8b%20%20%d0%b4%d0%b0%d0%bd%d0%bd%d1%8b%d1%85.%20%d0%a7%d0%b0%d1%81%d1%82%d1%8c%20I.%202018.pdf)

- **Linked List**  
  - Singly Linked List  //todo: вставить ссылку
  - Doubly Linked List  
  - Circular Singly Linked List
  - Circular Doubly Linked List
- **Stack (LIFO)**  
- **Queue (FIFO)**  
- **Deque (Double-Ended Queue)**  

### 1.2. Non-Dynamic (Static)  
- **Array (Fixed Size)**  //todo: вставить ссылку
- **Static List**  [разобрать самой]

## 2. Non-Linear Structures  
### 2.1. Trees  
- **Binary Tree**  
  - Binary Search Tree (BST) [done]
  - **Balanced Trees:**  
    - AVL Tree
    - Red-Black Tree
    - B-Tree
- **Trie (Prefix Tree)**
- **Heap:**  
  - Min Heap  
  - Max Heap  

### 2.2. Graphs
- **Undirected Graph**
- **Directed Graph (Digraph)**  
- **Weighted / Unweighted Graphs**  
- **Representation:**  
  - Adjacency Matrix  
  - Adjacency List  

### 2.3. Hash Tables
- **Hash Table**
- **Set (Unordered Collection of Unique Values)**
- **Map (Key-Value Collection)**

# Зачем нужны структуры данных?
* Оптимизация работы с данными — правильный выбор структуры позволяет ускорить обработку информации.
* Эффективное использование памяти — структуры, такие как связанный список, позволяют экономить память по сравнению с массивами.
* Решение сложных задач — например, деревья используются в базах данных, а графы в социальных сетях.
