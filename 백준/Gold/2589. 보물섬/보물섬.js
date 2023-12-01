const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, m] = data.shift().split(" ").map(Number);
  const matrix = data.map((el) => el.split(""));

  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === "L") {
        const dist = BFS(matrix, j, i);
        result = Math.max(result, dist);
      }
    }
  }
  console.log(result);
}

function BFS(matrix, x, y) {
  const visited = Array.from({ length: matrix.length }, () => {
    return Array.from({ length: matrix[0].length }, () => false);
  });

  const queue = [[x, y, 1]];
  let queueIdx = 0;
  let max = 0;
  while (queueIdx < queue.length) {
    const [x, y, dist] = queue[queueIdx++];
    if (visited[y][x]) continue;
    visited[y][x] = dist;
    max = Math.max(max, dist);

    const directions = [
      [0, 1],
      [1, 0],
      [-1, 0],
      [0, -1],
    ];
    for (let i = 0; i < directions.length; i++) {
      const [dx, dy] = directions[i];
      const [nx, ny] = [dx + x, dy + y];

      if (
        verify(matrix[0].length, matrix.length, nx, ny) &&
        !visited[ny][nx] &&
        matrix[ny][nx] === "L"
      ) {
        queue.push([nx, ny, dist + 1]);
      }
    }
  }
  return max - 1;
}

function verify(X, Y, x, y) {
  return 0 <= x && x < X && 0 <= y && y < Y;
}

solution(input);
