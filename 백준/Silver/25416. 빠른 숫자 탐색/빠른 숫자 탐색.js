const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const matrix = data.map((el) => el.split(" ").map(Number));

  const [y, x] = matrix.pop();
  const [X, Y] = [matrix[0].length, matrix.length];

  const visited = Array.from({ length: Y }, () => {
    return Array.from({ length: X }, () => 0);
  });

  const queue = [[x, y, 1]];
  let queueIdx = 0;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const verify = (x, y) => x >= 0 && X > x && y >= 0 && Y > y;
  let result = -1;

  while (queueIdx < queue.length) {
    const [x, y, cnt] = queue[queueIdx++];

    if (visited[y][x]) continue;
    if (matrix[y][x] === 1) {
      result = cnt - 1;
      break;
    }

    visited[y][x] = cnt;

    directions.forEach(([dx, dy]) => {
      const [nx, ny] = [dx + x, dy + y];
      if (verify(nx, ny) && matrix[ny][nx] !== -1 && !visited[ny][nx]) {
        queue.push([nx, ny, cnt + 1]);
      }
    });
  }

  console.log(result);
}

solution(input);
