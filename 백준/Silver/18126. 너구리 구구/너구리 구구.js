const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data.shift();
  const edges = data.map((el) => el.split(" ").map(Number));

  const graph = Array.from({ length: N + 1 }, () => []);

  edges.forEach(([a, b, d]) => {
    graph[a].push([b, d]);
    graph[b].push([a, d]);
  });

  const visited = Array.from({ length: N + 1 }, () => false);
  const distances = Array.from({ length: N + 1 }, () => 0);

  function DFS(node) {
    visited[node] = true;
    for (let [next, nextDist] of graph[node]) {
      if (!visited[next]) {
        distances[next] = distances[node] + nextDist;
        DFS(next);
      }
    }
  }

  DFS(1);

  console.log(Math.max(...distances));
}

solution(input);
