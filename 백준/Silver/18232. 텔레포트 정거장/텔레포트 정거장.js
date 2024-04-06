const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[n, _], [s, e], ...edges] = data.map((el) =>
    el.split(" ").map(Number)
  );

  const graph = Array.from({ length: n + 1 }, () => []);
  edges.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  const verify = (x) => 0 < x && x <= n;

  const visited = Array.from({ length: n + 1 }, () => false);

  const queue = [[s, 0]];
  let queueIdx = 0;
  while (queueIdx < queue.length) {
    const [node, dist] = queue[queueIdx++];
    if (node === e) {
      console.log(dist);
      return;
    }
    if (visited[node]) continue;
    visited[node] = true;

    [-1, 1].forEach((dx) => {
      const nx = node + dx;
      if (verify(nx) && !visited[nx]) queue.push([nx, dist + 1]);
    });

    graph[node].forEach((next) => {
      if (!visited[next]) queue.push([next, dist + 1]);
    });
  }
}

solution(input);
