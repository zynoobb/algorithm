const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [N, M] = data.shift().split(" ").map(Number);
  const matrix = data.map((el) => el.split(""));

  let tag = 1,
    result = 0;

  const directions = {
    U: (x, y) => [x, y - 1],
    D: (x, y) => [x, y + 1],
    R: (x, y) => [x + 1, y],
    L: (x, y) => [x - 1, y],
  };

  function DFS(x, y, tag) {
    const stack = [[x, y]];
    let stackIdx = 0;
    let lastLocation;

    while (stackIdx < stack.length) {
      const [dx, dy] = stack[stackIdx++];
      const route = matrix[dy][dx];
      matrix[dy][dx] = tag;
      const [nx, ny] = directions[route](dx, dy);

      if (isNaN(matrix[ny][nx])) stack.push([nx, ny]);
      else lastLocation = [nx, ny];
    }

    const [lx, ly] = stack.at(-1);
    const [fx, fy] = lastLocation;

    return matrix[ly][lx] === matrix[fy][fx] ? 1 : 0;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (isNaN(matrix[i][j])) {
        result += DFS(j, i, tag);
        tag++;
      }
    }
  }

  console.log(result);
}

solution(input);
