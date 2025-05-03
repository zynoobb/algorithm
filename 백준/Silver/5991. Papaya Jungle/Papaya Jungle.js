const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, m] = data.shift().split(" ").map(Number);
  const matrix = data.map((el) => el.split(" ").map(Number));

  let result = matrix[0][0] + matrix[n - 1][m - 1];
  matrix[0][0] = -1;

  const queue = [[0, 0]];
  let queueIdx = 0;

  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const locationVerify = (x, y) => {
    return y >= 0 && x >= 0 && y < n && x < m;
  };

  while (queue.length > queueIdx) {
    const [y, x] = queue[queueIdx++];
    let maxValue = -1,
      maxDirection = null;

    direction.forEach(([dy, dx]) => {
      const nx = dx + x,
        ny = dy + y;

      if (locationVerify(nx, ny) && matrix[ny][nx] !== -1) {
        const v = matrix[ny][nx];
        if (v > maxValue) {
          maxValue = v;
          maxDirection = [ny, nx];
        }
      }
    });
    const [visitY, visitX] = maxDirection;
    if (visitY === n - 1 && visitX === m - 1) break;
    matrix[visitY][visitX] = -1;
    queue.push([visitY, visitX]);
    result += maxValue;
  }

  console.log(result);
}

solution(input);
