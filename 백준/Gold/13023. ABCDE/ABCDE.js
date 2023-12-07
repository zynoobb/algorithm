const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const arr = data.map((el) => el.split(" ").map(Number));
  const [n, m] = arr.shift();

  const graph = Array.from({ length: n }, () => []);
  arr.forEach(([s, e]) => {
    graph[s].push(e);
    graph[e].push(s);
  });

  let resultChecker = false;

  const visited = Array.from({ length: n }, () => false);
  function DFS(node, dist) {
    visited[node] = true;

    if (++dist == 5) {
      resultChecker = true;
      return;
    }

    graph[node].forEach((nextNode) => {
      if (!visited[nextNode]) DFS(nextNode, dist);
    });
    visited[node] = false;
  }

  for (let i = 0; i < n; i++) {
    if (resultChecker) break;
    DFS(i, 0);
  }

  console.log(resultChecker ? 1 : 0);
}

solution(input);
