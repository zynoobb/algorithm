const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  let edges, testCase;

  const N = +data[0];
  for (let i = 0; i < data.length; i++) {
    if (!isNaN(data[i])) {
      if (!edges) edges = data.slice(i + 1, +data[i] + i);
      else testCase = data.slice(i + 1, +data[i] + i + 1);
    }
  }

  const graph = Array.from({ length: N + 1 }, () => []);
  const ranked = Array.from({ length: N + 1 }, () => 0);
  const parents = Array.from({ length: N + 1 }, () => 0);
  const visited = Array.from({ length: N + 1 }, () => false);

  edges.forEach((el) => {
    const [a, b] = el.split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
  });

  const stack = [[1, 0]];

  while (stack.length) {
    const [node, depth] = stack.pop();
    visited[node] = true;
    ranked[node] = depth;

    graph[node].forEach((next) => {
      if (!visited[next]) {
        parents[next] = node;
        stack.push([next, depth + 1]);
      }
    });
  }

  function LCA(a, b) {
    while (ranked[a] != ranked[b]) {
      if (ranked[a] > ranked[b]) a = parents[a];
      else b = parents[b];
    }

    while (a != b) {
      a = parents[a];
      b = parents[b];
    }

    return a;
  }

  const result = testCase.map((el) => {
    const [a, b] = el.split(" ").map(Number);
    return LCA(a, b);
  });

  console.log(result.join("\n"));
}

solution(input);
