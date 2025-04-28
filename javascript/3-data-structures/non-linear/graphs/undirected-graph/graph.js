class UndirectedGraph {
  constructor() {
    this.adjacencyList = {}; // объект для хранения вершин и их соседей
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
      const neighbors = Array.from(this.adjacencyList[vertex]).join(","); // TODO объяснить еще раз
      console.log(`${vertex} -> ${neighbors}`);

    }
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
//graph.addEdge('AAA', 'AAA');







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
