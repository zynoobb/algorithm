const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [N, M] = data.shift().split(" ").map(Number);
  const parents = [0, 0].concat(data.slice(0, N - 1).map(Number));
  const testCase = data.slice(N - 1);

  const depths = Array.from({ length: N + 1 }, () => 0);
  const visited = Array.from({ length: N + 1 }, () => false);
  const graph = Array.from({ length: N + 1 }, () => []);

  parents.forEach((el, idx) => {
    if (el !== 0) {
      graph[el].push(idx);
      graph[idx].push(el);
    }
  });

  const stack = [[1, 0]];
  while (stack.length) {
    const [node, dep] = stack.pop();
    if (visited[node]) continue;

    visited[node] = true;
    depths[node] = dep;

    graph[node].forEach((next) => {
      stack.push([next, dep + 1]);
    });
  }

  function LCA(a, b) {
    while (depths[a] != depths[b]) {
      if (depths[a] > depths[b]) a = parents[a];
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
