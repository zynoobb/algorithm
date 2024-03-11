const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const matrix = data.map((el) => el.split(" ").map(Number));
  const [X, Y] = matrix.shift();
  const visited = Array.from({ length: Y }, () => {
    return Array.from({ length: X }, () => false);
  });

  let result = false;

  const queue = [[0, 0]];
  let queueIdx = 0;
  const directions = [
    [0, 1],
    [1, 0],
  ];

  const locationVerify = (x, y) => 0 <= x && x < X && 0 <= y && y < Y;

  while (queueIdx < queue.length) {
    const [x, y] = queue[queueIdx++];
    if (x === X - 1 && y === Y - 1) {
      result = true;
      break;
    }

    if (visited[y][x]) continue;
    visited[y][x] = true;

    directions.forEach(([dx, dy]) => {
      const [nx, ny] = [dx + x, dy + y];

      if (locationVerify(nx, ny) && matrix[ny][nx] && !visited[ny][nx]) {
        queue.push([nx, ny]);
      }
    });
  }

  console.log(result ? "Yes" : "No");
}

solution(input);
