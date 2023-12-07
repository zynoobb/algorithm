const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const n = +data.shift();
  const arr = data.map((el) => el.split(" ").map(Number));

  const graph = Array.from({ length: n + 1 }, () => []);
  arr.forEach((el) => {
    const [s, e, w] = el;
    graph[s].push([w, e]);
    graph[e].push([w, s]);
  });

  function BFS(node) {
    const visited = Array.from({ length: n + 1 }, () => false);
    const distances = Array.from({ length: n + 1 }, () => 0);
    const queue = [[node, 0]];

    while (queue.length) {
      const [node, dist] = queue.shift();

      if (visited[node]) continue;
      visited[node] = true;
      distances[node] = dist;

      graph[node].forEach(([nextDist, nextNode]) => {
        const totalDist = dist + nextDist;
        queue.push([nextNode, totalDist]);
      });
    }
    const maxValue = Math.max(...distances);
    const maxIdx = distances.indexOf(maxValue);
    return [maxIdx, maxValue];
  }

  const leaf = BFS(1);
  const result = BFS(leaf[0])[1];
  console.log(result);
}

solution(input);
