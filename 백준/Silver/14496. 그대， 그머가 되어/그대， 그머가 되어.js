const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[a, b], [n, m], ...edges] = data.map((el) =>
    el.split(" ").map(Number)
  );

  const graph = Array.from({ length: n + 1 }, () => []);
  const visited = Array.from({ length: n + 1 }, () => false);

  edges.forEach(([s, e]) => {
    graph[s].push(e);
    graph[e].push(s);
  });

  const queue = [[a, 0]];
  let queueIdx = 0;
  let result = -1;

  while (queueIdx < queue.length) {
    const [node, cnt] = queue[queueIdx++];

    if (node === b) {
      result = cnt;
      break;
    }

    if (visited[node]) continue;
    visited[node] = true;

    graph[node].forEach((next) => {
      if (!visited[next]) queue.push([next, cnt + 1]);
    });
  }

  console.log(result);
}

solution(input);
