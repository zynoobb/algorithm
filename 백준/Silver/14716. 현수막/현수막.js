const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, m] = data.shift().split(" ").map(Number);
  const matrix = data.map((el) => el.split(" ").map(Number));
  const visited = Array.from({ length: n }, () => {
    return Array.from({ length: m }, () => false);
  });

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [-1, -1],
    [1, 1],
    [-1, 1],
    [1, -1],
  ];
  const verify = (x, y) => x >= 0 && m > x && y >= 0 && n > y;

  function BFS(x, y) {
    const queue = [[x, y]];
    let queueIdx = 0;

    while (queueIdx < queue.length) {
      const [x, y] = queue[queueIdx++];

      if (visited[y][x]) continue;
      visited[y][x] = true;

      directions.forEach(([dx, dy]) => {
        const [nx, ny] = [dx + x, dy + y];
        if (verify(nx, ny) && matrix[ny][nx] && !visited[ny][nx]) {
          queue.push([nx, ny]);
        }
      });
    }
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] && !visited[i][j]) {
        result++;
        BFS(j, i);
      }
    }
  }

  console.log(result);
}

solution(input);
