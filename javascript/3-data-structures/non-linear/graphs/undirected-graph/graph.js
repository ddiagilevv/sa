class UndirectedGraph {
  constructor() {
    this.adjacencyList = {}; // список смежности. объект для хранения вершин и их соседей
    // adjacencyList список смежности - понятие из дискретной математики / теории графов
    // список смежности - способ представления графа (не важно, ор. или неор.) в памяти компьютера.
    // для каждой вершины храним список вершин с которыми она соединена ребром

    // это массив или словарь где 
    // ключ - вершина графа
    // значение множество вершин , в которе ребра ведут из этой вершины

    // G = (V, E)
    // V - множество вершин
    // E - множество ребер
    // тогда список смежности: V -> list(V)

    
  }

  // метод добавления новой вершины в граф
  addVertex(vertex) {
    // проверка
    if (!this.adjacencyList[vertex]){
      this.adjacencyList[vertex] = new Set();
    }
  }

  // метод добавления ребра
  addEdge(vertex1, vertex2) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    
    //добавим vertex-ы в списки соседей друг друга
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    // если у вершины vertex1 есть список соседей - удалим vertex2 из него (и обратно!)

    if (this.adjacencyList[vertex1]){
      this.adjacencyList[vertex2].delete(vertex1)
    }
    if (this.adjacencyList[vertex2]){
      this.adjacencyList[vertex1].delete(vertex1)
    }
  }

  removeVertex(vertex) {
    // если уже отсутствует - не делаем ничего

    if (!this.adjacencyList[vertex]) return;

    // перебираем всех соседей этой вершины
    for (let neighbor of this.adjacencyList[vertex]){
      // у каждого соседа удаляем эту вершину(vertex) из их списка соседей
      this.adjacencyList[neighbor].delete(vertex);
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



  // DFS Recursive
  // Depth-First Search Recursive / Рекурсивный поиск в глубину
  /*
    1) начинаем с указанной вершины (start)
    2) посещаем ее и отмечаем как посещенную
    3) Рекурсивно посещаем всех ее непосещенных соседей
    4) Алгортм идет "вглубь" графа до конца по одной ветке
    5) Т.к. алгоритм рекурсивный - на очень бчень больших графах будет stack overflow. 
  */
  dfsRecursive(start){
    const result = []; // список для записи порядка посещения вершин
    const visited = new Set(); // множество для отметки посещенных вершин

    const dfs = (vertex) => {
      // если вершина не существует - возвращаемся
      if (!vertex) return;

      visited.add(vertex); // отметили вершину как посещенную
      result.push(vertex); // добавили вершину в результат

      // перебор всех соседей текущей вершины (vertex)
      for (let neighbor of this.adjacencyList[vertex]){
        // если сосед не посещен
        if(!visited.has(neighbor)) {
          dfs(neighbor);
        }
      }
    };

    dfs(start); // запуск обхода с начальной вершины
    return result;
  }


  // DFS Iterative
  // Depth-First Search Iterative / Итеративный обход в глубину (через стек)
  // Стек работает по принципу LIFO
  // 1) Сначала кладем в стек стартовую вершину.
  // 2) Пока стек не пуст:
  // достаем вершину
  // посещаем ее
  // кладем всех непоседенных соседей в стек
  dfsIterative(start){
    const stack = [start]; // используем stack, начальная вершина - в нем
    const result = [];
    const visited = new Set();

    visited.add(start); // сразу отметили начальную вершину

    while(stack.length){
      const vertex = stack.pop(); // забираем вершину из стека
      result.push(vertex); // добавили в результат

      // перебор всех соседей текущей вершины (vertex)
      for (let neighbor of this.adjacencyList[vertex]){
        // если сосед не посещен
        if(!visited.has(neighbor)) {
          visited.add(neighbor); // отметили его
          stack.push(neighbor);

        }
      }
    }

    return result;
  }


  // BFS
  // Breadth-First Search
  // стартовая вершина добавляется в очередь и помечается как посещенная
  // Пока очередь не пуста 
  //   удаляем вершину из начала очереди
  //   добавляем ее в список результата
  //   перебираем всех соседей текущей вершины
  //   если сосед не посещен
  //     помечаем как посещенного
  //     добавляем в очередь
  // повторяем, пока не обработаем всех достижимых соседей
  bfs(start){
    const queue = [start]; // завели очередь
    const result = []; // завели список результата
    const visited = new Set(); // множество посещенных вершин

    visited.add(start); // сразу отмечаем начальную вершину

    while(queue.length) { // Пока очередь не пуста 
      const vertex = queue.shift;
      result.push(vertex); // добавили в результат

      // перебираем всех соседей текущей вершины:
      for (let neighbor of this.adjacencyList[vertex]){
        if (!visited.has(neighbor)){ // если сосед не посещен
          visited.add(neighbor); // помечаем как посещенного
          queue.push(neighbor);
        }
      }
    }
    return result; // возвращаем порядок обхода
  }
}


const graph = new UndirectedGraph();

// Базовые семейные знакомства
graph.addEdge('Рик', 'Бет');
graph.addEdge('Рик', 'Джерри');
graph.addEdge('Рик', 'Морти');
graph.addEdge('Рик', 'Саммер');
graph.addEdge('Бет', 'Джерри');
graph.addEdge('Бет', 'Морти');
graph.addEdge('Бет', 'Саммер');
graph.addEdge('Джерри', 'Морти');
graph.addEdge('Джерри', 'Саммер');
graph.addEdge('Морти', 'Саммер');

// Старые друзья Рика
graph.addEdge('Рик', 'Birdperson');
graph.addEdge('Рик', 'Squanchy');
graph.addEdge('Birdperson', 'Squanchy'); // они тоже знакомы

// Знакомство с Tammy
graph.addEdge('Birdperson', 'Tammy');
graph.addEdge('Рик', 'Tammy');



// Враги и антагонисты
graph.addEdge('Рик', 'Unity_1');
//

graph.addEdge('Рик', 'Evil Morty');
graph.addEdge('Морти', 'Evil Morty'); // напрямую пересекались
graph.addEdge('Рик', 'Rick Prime');

// Совет Риков
graph.addEdge('Рик', 'Совет Риков');

// Знакомства из первых приключений
graph.addEdge('Рик', 'Мистер Мисикс');
graph.addEdge('Морти', 'Мистер Мисикс');

graph.addEdge('Рик', 'Абрадольф Линклер');
graph.addEdge('Морти', 'Абрадольф Линклер');

graph.addEdge('Рик', 'Дьявол');
graph.addEdge('Саммер', 'Дьявол'); // она работала в его магазине

graph.addEdge('Рик', 'Кромулоны');
graph.addEdge('Морти', 'Кромулоны');
graph.addEdge('Саммер', 'Кромулоны');

graph.addEdge('Морти', 'Tiny Rick'); // это альтер-эго Рика

// Президент США
graph.addEdge('Рик', 'Президент');
graph.addEdge('Морти', 'Президент');
graph.addEdge('Саммер', 'Президент');

// Нимбус
graph.addEdge('Рик', 'Нимбус');
graph.addEdge('Бет', 'Нимбус');
graph.addEdge('Джерри', 'Нимбус');

// Глутти
graph.addEdge('Рик', 'Glootie');
graph.addEdge('Морти', 'Glootie');
graph.addEdge('Джерри', 'Glootie');

console.log("Текущий граф:");
graph.printGraph();

// Unity

graph.addEdge('Unity_1', 'Unity_2');
graph.addEdge('Unity_2', 'Unity_3');
graph.addEdge('Unity_3', 'Unity_4');
graph.addEdge('Unity_5', 'Unity_4');


// Петля
// graph.addEdge('AAA', 'AAA');


// Удаляем ребро и вершину
//graph.removeEdge('D', 'E');
//graph.removeVertex('C');

// Сохраняем граф в JSON-файл для визуализации
const fs = require('fs');
const { validateHeaderValue } = require('http');

function exportGraph(graph) {
  const nodes = [];
  const links = [];

  for (let vertex in graph.adjacencyList) {
    nodes.push({ id: vertex });
  }

  for (let vertex in graph.adjacencyList) {
    for (let neighbor of graph.adjacencyList[vertex]) {
      links.push({ source: vertex, target: neighbor });
    }
  }

  const data = { nodes, links };
  fs.writeFileSync('graph_data.json', JSON.stringify(data, null, 2));
}
exportGraph(graph);
