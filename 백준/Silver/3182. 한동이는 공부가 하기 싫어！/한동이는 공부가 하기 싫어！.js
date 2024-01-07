const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const arr = data.map(Number);
  const N = arr[0];
  let visited = Array.from({ length: N + 1 }, () => false);

  function DFS(node, cnt) {
    if (visited[node]) return;

    visited[node] = true;
    const next = arr[node];

    if (!visited[next]) cnt = DFS(next, cnt + 1);

    return cnt;
  }

  const result = Array.from({ length: N + 1 }, () => 0);
  for (let i = 1; i <= N; i++) {
    visited = Array.from({ length: N + 1 }, () => false);
    result[i] = DFS(i, 0);
  }

  const max = Math.max(...result);
  console.log(result.indexOf(max));
}

solution(input);
