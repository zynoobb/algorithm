const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const arr = data.map((el) => el.split(" ").map(Number));
  const [N, M] = arr.shift();

  const visited = Array.from({ length: N }, () => {
    return Array.from({ length: M }, () => 0);
  });

  const paints = {};
  function verify(x, y) {
    return 0 <= x && x < M && 0 <= y && y < N;
  }

  function DFS(x, y, tag) {
    const stack = [[x, y]];
    visited[y][x] = tag;
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    while (stack.length) {
      const [x, y] = stack.pop();

      directions.forEach(([dx, dy]) => {
        const [nx, ny] = [dx + x, dy + y];
        if (verify(nx, ny) && !visited[ny][nx] && arr[ny][nx] == 1) {
          visited[ny][nx] = tag;
          stack.push([nx, ny]);
          paints[tag] += 1;
        }
      });
    }
  }
  let tags = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === 1 && !visited[i][j]) {
        tags++;
        paints[tags] = 1;
        DFS(j, i, tags);
      }
    }
  }

  const max = Object.values(paints).length
    ? Math.max(...Object.values(paints))
    : 0;
  console.log(tags);
  console.log(max);
}

solution(input);
