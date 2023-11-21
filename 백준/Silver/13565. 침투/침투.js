const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [Y, X] = data.shift().split(" ").map(Number);
  const matrix = data.map((el) => el.split("").map(Number));
  const visited = Array.from({ length: Y }, () => {
    return Array.from({ length: X }, () => 0);
  });
  matrix[0].forEach((_, j) => {
    if (!matrix[0][j] && !visited[0][j]) DFS(visited, matrix, 0, j);
  });

  console.log(visited.at(-1).includes(1) ? "YES" : "NO");
}

function DFS(visited, matrix, y, x) {
  const queue = [[x, y]];
  let queueIdx = 0;
  visited[y][x] = 1;
  while (queue.length > queueIdx) {
    let [x, y] = queue[queueIdx++];
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    for (let i = 0; i < directions.length; i++) {
      const [dx, dy] = directions[i];
      const [nx, ny] = [dx + x, dy + y];
      if (
        verify(matrix[0].length, matrix.length, nx, ny) &&
        !visited[ny][nx] &&
        !matrix[ny][nx]
      ) {
        visited[ny][nx] = 1;
        queue.push([nx, ny]);
      }
    }
  }
}

function verify(X, Y, x, y) {
  return 0 <= x && x < X && 0 <= y && y < Y;
}

solution(input);
