const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const arr = data.map((el) => el.split(" ").map(Number));
  const [n, k] = arr.shift(),
    apples = arr.pop();

  const graph = Array.from({ length: n }, () => []);

  arr.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  const visited = Array.from({ length: n }, () => false);
  const queue = [[0, 0]];
  let result = 0;
  let queueIdx = 0;

  while (queueIdx < queue.length) {
    const [node, cnt] = queue[queueIdx++];

    if (visited[node] || cnt > k) break;
    visited[node] = true;
    if (apples[node]) result++;

    graph[node].forEach((next) => {
      if (!visited[next]) queue.push([next, cnt + 1]);
    });
  }

  console.log(result);
}

solution(input);
