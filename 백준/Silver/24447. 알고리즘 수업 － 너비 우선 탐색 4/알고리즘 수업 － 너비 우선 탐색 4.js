const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[n, m, r], ...arr] = data.map((el) => el.split(" ").map(Number));

  const graph = Array.from({ length: n + 1 }, () => []);

  arr.forEach(([start, end]) => {
    graph[start].push(end);
    graph[end].push(start);
  });

  const v = Array.from({ length: n + 1 }, () => -1);
  const t = Array.from({ length: n + 1 }, (_, idx) => (idx === r ? 1 : 0));
  let tIdx = 1;

  const queue = [[r, 0]];
  let queueIdx = 0;

  while (queue.length > queueIdx) {
    const [node, dist] = queue[queueIdx++];

    if (v[node] !== -1) continue;

    t[node] = tIdx++;
    v[node] = dist;
    graph[node]
      .sort((a, b) => a - b)
      .forEach((nextNode) => {
        if (v[nextNode] === -1) queue.push([nextNode, dist + 1]);
      });
  }

  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += v[i] * t[i];
  }

  console.log(result);
}

solution(input);
