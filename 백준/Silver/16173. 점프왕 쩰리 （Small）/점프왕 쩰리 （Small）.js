const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data.shift();

  const matrix = data.map((el) => el.split(" ").map(Number));

  const queue = [[0, 0]];
  let queueIdx = 0;

  function verify(x, y) {
    return x >= 0 && N > x && y >= 0 && N > y;
  }

  while (queueIdx < queue.length) {
    const [x, y] = queue[queueIdx++];

    if (matrix[y][x] === -1) {
      console.log("HaruHaru");
      return;
    }

    if (matrix[y][x] === 0) continue;

    const [nx, ny] = [x + matrix[y][x], y + matrix[y][x]];

    if (verify(x, ny)) queue.push([x, ny]);
    if (verify(nx, y)) queue.push([nx, y]);
  }

  console.log("Hing");
}

solution(input);
