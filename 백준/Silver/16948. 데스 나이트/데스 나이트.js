const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[N], [x, y, tx, ty]] = data.map((el) => el.split(" ").map(Number));

  const visited = Array.from({ length: N }, () => {
    return Array.from({ length: N }, () => 0);
  });

  const queue = [[x, y, 1]];
  const directions = [
    [-2, -1],
    [-2, 1],
    [0, -2],
    [0, 2],
    [2, -1],
    [2, 1],
  ];
  let queueIdx = 0;
  visited[y][x] = 1;

  const verify = (x, y) => {
    return 0 <= x && x < N && 0 <= y && y < N;
  };

  while (queueIdx < queue.length) {
    const [x, y, dist] = queue[queueIdx++];
    for (let i = 0; i < directions.length; i++) {
      const [dx, dy] = directions[i];
      const nx = dx + x,
        ny = dy + y;

      if (nx == tx && ny == ty) {
        console.log(dist);
        return;
      }

      if (verify(nx, ny) && !visited[ny][nx]) {
        visited[ny][nx] = dist + 1;
        queue.push([nx, ny, dist + 1]);
      }
    }
  }

  console.log(-1);
}

solution(input);
