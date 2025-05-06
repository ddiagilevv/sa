class DirectedGraph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = new Set();
      }
    }
  
    addEdge(fromVertex, toVertex) {
      this.addVertex(fromVertex);
      this.addVertex(toVertex);
      this.adjacencyList[fromVertex].add(toVertex); // Только одно направление!
    }
  
    removeEdge(fromVertex, toVertex) {
      if (this.adjacencyList[fromVertex]) {
        this.adjacencyList[fromVertex].delete(toVertex);
      }
    }
  
    removeVertex(vertex) {
      if (!this.adjacencyList[vertex]) return;
  
      // Удалим vertex из списков всех других вершин (входящие ребра)
      for (let v in this.adjacencyList) {
        this.adjacencyList[v].delete(vertex);
      }
  
      // Удалим саму вершину
      delete this.adjacencyList[vertex];
    }
  
    printGraph() {
      for (let vertex in this.adjacencyList) {
        const neighbors = Array.from(this.adjacencyList[vertex]).join(",");
        console.log(`${vertex} -> ${neighbors}`);
      }
    }
  
    dfsRecursive(start) {
      const result = [];
      const visited = new Set();
  
      const dfs = (vertex) => {
        if (!vertex) return;
        visited.add(vertex);
        result.push(vertex);
  
        for (let neighbor of this.adjacencyList[vertex]) {
          if (!visited.has(neighbor)) {
            dfs(neighbor);
          }
        }
      };
  
      dfs(start);
      return result;
    }
  
    dfsIterative(start) {
      const stack = [start];
      const result = [];
      const visited = new Set();
      visited.add(start);
  
      while (stack.length) {
        const vertex = stack.pop();
        result.push(vertex);
  
        for (let neighbor of this.adjacencyList[vertex]) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            stack.push(neighbor);
          }
        }
      }
  
      return result;
    }
  }
  
  const graph = new DirectedGraph();
  
  // Пример добавления направленных ребер (аналогично предыдущему графу)
  graph.addEdge('Rick', 'Beth');
  graph.addEdge('Rick', 'Jerry');
  graph.addEdge('Beth', 'Summer');
  graph.addEdge('Jerry', 'Morty');
  graph.addEdge('Morty', 'Summer');
  
  // Печать графа
  console.log("Directed Graph:");
  graph.printGraph();
  
  const fs = require('fs');

  function exportGraph(graph) {
    const nodes = [];
    const links = [];
    const seen = new Set();
  
    // Добавляем все вершины
    for (let vertex in graph.adjacencyList) {
      nodes.push({ id: vertex });
    }
  
    // Добавляем направленные ребра
    for (let source in graph.adjacencyList) {
      for (let target of graph.adjacencyList[source]) {
        const forward = `${source}->${target}`;
        const reverse = `${target}->${source}`;
        const isBidirectional = graph.adjacencyList[target]?.has(source);
  
        // Чтобы не дублировать одно и то же ребро
        if (!seen.has(forward)) {
          links.push({
            source,
            target,
            isBidirectional: isBidirectional && !seen.has(reverse) // только один раз помечаем флаг
          });
          seen.add(forward);
        }
      }
    }
  
    const data = { nodes, links };
    fs.writeFileSync('directed_graph_data.json', JSON.stringify(data, null, 2));
  }
  
  exportGraph(graph);
  
  