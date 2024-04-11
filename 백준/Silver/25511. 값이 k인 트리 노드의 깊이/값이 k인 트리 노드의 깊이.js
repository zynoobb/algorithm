const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[n, k], ...edges] = data.map((el) => el.split(" ").map(Number));
  const table = edges.pop();

  const tree = Array.from({ length: n }, () => []);

  edges.forEach(([a, b]) => {
    tree[table[a]].push(table[b]);
    tree[table[b]].push(table[a]);
  });

  const visited = Array.from({ length: n }, () => 0);
  const queue = [[table[0], 1]];
  let queueIdx = 0;

  while (queueIdx < queue.length) {
    const [node, cnt] = queue[queueIdx++];

    if (node === k) {
      console.log(cnt - 1);
      break;
    }

    if (visited[node]) continue;
    visited[node] = cnt;

    tree[node].forEach((next) => {
      if (!visited[next]) queue.push([next, cnt + 1]);
    });
  }
}

solution(input);
