const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[N, _], ...arr] = data.map((el) => el.split(" ").map(Number));

  const graph = Array.from({ length: N + 1 }, () => []);
  const rank = Array.from({ length: N + 1 }, () => 0);

  arr.forEach(([a, b]) => {
    graph[a].push(b);
    rank[b]++;
  });

  const queue = [];
  let queueIdx = 0;
  for (let i = 1; i <= N; i++) {
    if (!rank[i]) queue.push([i, 1]);
  }

  const result = Array.from({ length: N + 1 }, () => null);

  while (queueIdx < queue.length) {
    const [node, cnt] = queue[queueIdx++];
    result[node] = cnt;
    graph[node].forEach((next) => {
      rank[next]--;
      if (!rank[next]) {
        queue.push([next, cnt + 1]);
      }
    });
  }

  result.shift();
  console.log(...result);
}

solution(input);
