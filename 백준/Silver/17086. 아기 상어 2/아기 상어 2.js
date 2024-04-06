const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[N, M], ...matrix] = data.map((el) => el.split(" ").map(Number));

  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  function locationVerify(x, y) {
    return 0 <= x && x < M && 0 <= y && y < N;
  }

  const queue = [];
  let queueIdx = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (matrix[i][j]) queue.push([j, i]);
    }
  }

  while (queueIdx < queue.length) {
    const [x, y] = queue[queueIdx++];
    directions.forEach(([dx, dy]) => {
      const [nx, ny] = [dx + x, dy + y];

      if (locationVerify(nx, ny)) {
        if (!matrix[ny][nx]) {
          matrix[ny][nx] = matrix[y][x] + 1;
          queue.push([nx, ny]);
        }
      }
    });
  }

  let result = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      result = Math.max(result, matrix[i][j]);
    }
  }

  console.log(result - 1);
}

solution(input);
