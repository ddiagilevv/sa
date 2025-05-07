class DirectedGraph {
  constructor(){
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    // проверка
    if (!this.adjacencyList[vertex]){
      this.adjacencyList[vertex] = new Set();
    }
  }

  // метод добавления ребра
  addEdge(fromVertex, toVertex) {
    this.addVertex(fromVertex);
    this.addVertex(toVertex);
    
    //добавим vertex-ы в списки соседей друг друга
    this.adjacencyList[fromVertex].add(toVertex); // только одно направление!
  }

  removeEdge(fromVertex, toVertex){
    if (this.adjacencyList[fromVertex]){
      this.adjacencyList[fromVertex].delete(toVertex)
    }
  }

  removeVertex(vertex) {
    // если уже отсутствует - не делаем ничего
    if (!this.adjacencyList[vertex]) return;

    // перебираем всех соседей этой вершины
    for (let v of this.adjacencyList){
      // у каждого соседа удаляем эту вершину(vertex) из их списка соседей
      this.adjacencyList[v].delete(vertex);
    }

    // удаление самой вершины
    delete this.adjacencyList[vertex];
  }

  printGraph() {
    // перебираем все вершины в графе
    for(let vertex in this.adjacencyList) {
      // разделяя запятыми, преобразуем множество соседей в строку
      const neighbors = Array.from(this.adjacencyList[vertex]).join(",");
      /*
      1. adjacencyList[vertex]. Здесь vertex в квадратных скобка это переменная в которую поочередно будут попадать имя каждой вершины.
      2. Array - см https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
      3. Array.from(парметр) делает массив из любого итерируемого объекта
      4. .join(",") - превращает массив (массив = Array.from(парметр);) в строку. "," - delimeter, т.е. разделитель.
      5. результат работы Array.from(this.adjacencyList[vertex]).join(","); сохранен в neighbors
      6. Array.from(...).join(...) - это method chaining.
      */
      console.log(`${vertex} -> ${neighbors}`);
    }
  }
}