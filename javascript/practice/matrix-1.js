// Дана матрица размера n x m. Подсчитать количество нулевых элементов. Использовать цикл while.

const matrix = [
    [0, 1, 2],
    [4, 0, 6],
    [0, 8, 0]
  ];
  
let n = matrix.length; //количество строк 
let m = matrix[0].length; //количество столбцов
let i = 0;
let zeroCount = 0;

while (i < n) {
  let j = 0;
  while (j < m) {
    if (matrix[i][j] === 0) {
      zeroCount++;
    }
    j++;
  }
  i++;
}
console.log(`Количество нулей: ${zeroCount}`);