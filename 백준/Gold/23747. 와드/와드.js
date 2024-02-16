const { verify } = require("crypto");
const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [Y, X] = data.shift().split(" ").map(Number);
  const queue = data.pop().split("");
  let queueIdx = 0;
  let location = data
    .pop()
    .split(" ")
    .map((el) => +el - 1);
  const matrix = data.map((el) => el.split(""));
  const visions = Array.from({ length: Y }, () => {
    return Array.from({ length: X }, () => "#");
  });

  const move = {
    L: (y, x) => [y, x - 1],
    R: (y, x) => [y, x + 1],
    U: (y, x) => [y - 1, x],
    D: (y, x) => [y + 1, x],
  };

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const verify = (x, y) => X > x && x >= 0 && Y > y && y >= 0;

  function BFS(x, y) {
    const t = matrix[y][x];
    const queue = [[x, y]];

    let queueIdx = 0;

    while (queueIdx < queue.length) {
      const [x, y] = queue[queueIdx++];

      if (visions[y][x] === ".") continue;
      visions[y][x] = ".";

      directions.forEach(([dx, dy]) => {
        const [nx, ny] = [dx + x, dy + y];
        if (verify(nx, ny) && visions[ny][nx] === "#" && matrix[ny][nx] === t) {
          queue.push([nx, ny]);
        }
      });
    }
  }

  while (queueIdx < queue.length) {
    const act = queue[queueIdx++];
    const [y, x] = location;
    if (act === "W") BFS(x, y);
    else location = move[act](y, x);
  }

  const [ly, lx] = location;
  visions[ly][lx] = ".";
  directions.forEach(([dx, dy]) => {
    const [nx, ny] = [dx + lx, dy + ly];
    if (verify(nx, ny)) visions[ny][nx] = ".";
  });

  console.log(visions.map((el) => el.join("")).join("\n"));
}

solution(input);
