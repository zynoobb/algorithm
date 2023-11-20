const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();

  const result = [];
  data.forEach((_, idx) => {
    if (idx % 3 == 0) {
      const temp = data.slice(idx, idx + 3);
      result.push(BFS(temp));
    }
  });

  console.log(result.join("\n"));
}

function BFS(arr) {
  const n = +arr.shift();
  const visited = Array.from({ length: n }, () => {
    return Array.from({ length: n }, () => 0);
  });
  const [[x, y], [tx, ty]] = arr.map((el) => el.split(" ").map(Number));

  const queue = [[x, y, 1]];

  while (queue.length) {
    const [x, y, dist] = queue.shift();

    if (visited[y][x]) continue;
    if (x == tx && y == ty) return dist - 1;

    visited[y][x] = dist;

    const directions = [
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [-2, -1],
      [-2, 1],
      [2, -1],
      [2, 1],
    ];
    for (let i = 0; i < directions.length; i++) {
      const [dx, dy] = directions[i];
      const [nx, ny] = [dx + x, dy + y];
      if (verify(n, nx, ny) && !visited[ny][nx]) {
        queue.push([nx, ny, dist + 1]);
      }
    }
  }
}

function verify(n, x, y) {
  return 0 <= x && x < n && 0 <= y && y < n;
}

solution(input);
