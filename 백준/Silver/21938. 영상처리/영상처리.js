const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[N, M], ...arr] = data.map((el) => el.split(" ").map(Number));
  const [T] = arr.pop();

  const matrix = Array.from({ length: N }, () => {
    return Array.from({ length: M }, () => false);
  });

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M * 3; j += 3) {
      const avg = (arr[i][j] + arr[i][j + 1] + arr[i][j + 2]) / 3;

      if (avg >= T) matrix[i][Math.floor(j / 3)] = true;
    }
  }

  const visited = Array.from({ length: N }, () => {
    return Array.from({ length: M }, () => false);
  });

  function locationVerify(x, y) {
    return 0 <= x && x < M && 0 <= y && y < N;
  }

  function DFS(x, y) {
    const queue = [[x, y]];
    let queueIdx = 0;
    const directions = [
      [0, 1],
      [1, 0],
      [-1, 0],
      [0, -1],
    ];

    while (queueIdx < queue.length) {
      const [x, y] = queue[queueIdx++];

      if (visited[y][x]) continue;
      visited[y][x] = true;

      directions.forEach(([dx, dy]) => {
        const [nx, ny] = [dx + x, dy + y];
        if (locationVerify(nx, ny) && matrix[ny][nx] && !visited[ny][nx]) {
          queue.push([nx, ny]);
        }
      });
    }
  }

  let result = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (matrix[i][j] && !visited[i][j]) {
        DFS(j, i);
        result++;
      }
    }
  }

  console.log(result);
}

solution(input);
