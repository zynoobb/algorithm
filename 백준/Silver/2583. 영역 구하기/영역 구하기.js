const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const arr = data.map((el) => el.split(" ").map(Number));
  const [N, M, _] = arr.shift();
  const matrix = Array.from({ length: N }, () => {
    return Array.from({ length: M }, () => 0);
  });
  const visited = Array.from({ length: N }, () => {
    return Array.from({ length: M }, () => false);
  });

  arr.forEach((el) => {
    const [x1, y1, x2, y2] = el;
    for (let i = y1; i < y2; i++) {
      for (let j = x1; j < x2; j++) matrix[i][j] = 1;
    }
  });
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (!matrix[i][j] && !visited[i][j])
        result.push(DFS(matrix, visited, j, i));
    }
  }
  result.sort((a, b) => a - b);
  console.log(result.length);
  console.log(...result);
}

function DFS(matrix, visited, x, y) {
  const stack = [[x, y]];
  visited[y][x] = true;
  let dep = 1;
  while (stack.length) {
    const [x, y] = stack.pop();

    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    for (let i = 0; i < directions.length; i++) {
      const [dx, dy] = directions[i];
      const [nx, ny] = [dx + x, dy + y];

      if (
        verify(matrix[0].length, matrix.length, nx, ny) &&
        !visited[ny][nx] &&
        !matrix[ny][nx]
      ) {
        visited[ny][nx] = true;
        stack.push([nx, ny]);
        dep++;
      }
    }
  }
  return dep;
}

function verify(X, Y, x, y) {
  return 0 <= x && x < X && 0 <= y && y < Y;
}

solution(input);
