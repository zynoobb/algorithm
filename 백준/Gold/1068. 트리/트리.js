const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[n], arr, [t]] = data.map((el) => el.split(" ").map(Number));
  const graph = Array.from({ length: n }, () => []);

  let root;
  arr.forEach((el, idx) => {
    if (el !== -1) graph[el].push(idx);
    else root = idx;
  });

  const result = DFS(graph, root, t);
  console.log(result);
}

function DFS(graph, root, target) {
  const visited = Array.from({ length: graph.length }, () => false);
  const stack = [root];

  let stackIdx = 0;
  while (stackIdx < stack.length) {
    const node = stack[stackIdx++];
    if (visited[node] || node == target) continue;
    visited[node] = graph[node].filter((el) => el !== target).length;

    graph[node].forEach((next) => {
      if (!visited[next] || next !== target) stack.push(next);
    });
  }

  return visited.filter((el) => el === 0).length;
}

solution(input);
