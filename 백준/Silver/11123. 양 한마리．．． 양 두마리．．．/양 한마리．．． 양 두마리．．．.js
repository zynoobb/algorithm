const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();
  const TC = [];
  data.forEach((el, idx) => {
    const split = el.split(" ");
    if (split.length == 2) {
      TC.push(data.slice(idx, +split[0] + idx + 1));
    }
  });

  const result = TC.map((el) => act(el));
  console.log(result.join("\n"));
}

function act(arr) {
  const [N, M] = arr.shift().split(" ").map(Number);
  const visited = Array.from({ length: N }, () => {
    return Array.from({ length: M }, () => false);
  });

  const matrix = arr.map((el) =>
    el.split("").map((v) => (v = v == "#" ? 0 : 1))
  );

  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (!matrix[i][j] && !visited[i][j]) {
        count++;
        DFS(matrix, visited, j, i);
      }
    }
  }
  return count;
}

function DFS(matrix, visited, x, y) {
  const stack = [[x, y]];
  visited[y][x] = true;
  while (stack.length) {
    const [x, y] = stack.pop();

    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    for (let i = 0; i < directions.length; i++) {
      const [dx, dy] = directions[i];
      const [nx, ny] = [dx + x, dy + y];

      if (
        verify(matrix[0].length, matrix.length, nx, ny) &&
        !visited[ny][nx] &&
        !matrix[ny][nx]
      ) {
        visited[ny][nx] = true;
        stack.push([nx, ny]);
      }
    }
  }
}

function verify(X, Y, x, y) {
  return 0 <= x && x < X && 0 <= y && y < Y;
}

solution(input);
