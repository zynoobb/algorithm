const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [N, M] = data.shift().split(" ").map(Number);

  function tranNum(alp) {
    return alp.charCodeAt() - 65;
  }

  function verify(x, y) {
    return 0 <= x && x < M && 0 <= y && y < N;
  }

  const matrix = data.map((el) => el.split("").map((x) => tranNum(x)));
  const visited = Array.from({ length: 26 }, () => false);
  visited[matrix[0][0]] = true;

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let result = 0;

  function DFS(x, y, cnt) {
    result = Math.max(result, cnt);
    if (result === 26) {
      console.log(26);
      process.exit();
    }

    directions.forEach(([dx, dy]) => {
      const [nx, ny] = [dx + x, dy + y];

      if (verify(nx, ny) && !visited[matrix[ny][nx]]) {
        visited[matrix[ny][nx]] = true;
        DFS(nx, ny, cnt + 1);
        visited[matrix[ny][nx]] = false;
      }
    });
  }

  DFS(0, 0, 1);

  console.log(result);
}

solution(input);
