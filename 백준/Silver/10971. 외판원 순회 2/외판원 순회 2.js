const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data.shift();
  const edges = data.map((el) => el.split(" ").map(Number));
  const visited = Array.from({ length: N }, () => false);
  let result = Infinity;

  function DFS(start, cnt, total, depth) {
    if (total > result) return;

    if (depth === N) {
      if (edges[cnt][start]) {
        total += edges[cnt][start];
        result = Math.min(result, total);
      }
      return;
    }

    for (let next = 0; next < N; next++) {
      if (!visited[next] && edges[cnt][next]) {
        visited[next] = true;
        DFS(start, next, total + edges[cnt][next], depth + 1);
        visited[next] = false;
      }
    }
  }

  for (let i = 0; i < N; i++) {
    visited[i] = true;
    DFS(i, i, 0, 1);
    visited[i] = false;
  }

  console.log(result);
}

solution(input);
