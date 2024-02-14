const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const arr = data.map((el) => el.split(" ").map(Number));
  const [n, m] = arr.shift();
  const edges = arr.slice(0, m),
    testCase = arr.slice(m + 1);

  const trees = Array.from({ length: n + 1 }, () => []);

  edges.forEach(([a, b]) => {
    trees[a].push(b);
    trees[b].push(a);
  });

  function BFS([act, a, b]) {
    if (act === 2) {
      trees[a] = trees[a].filter((el) => el != b);
      trees[b] = trees[b].filter((el) => el != a);
    } else {
      trees[a].push(b);
      trees[b].push(a);
    }

    const distances = Array.from({ length: n + 1 }, () => -1);

    const queue = [[1, 0]];
    let queueIdx = 0;

    while (queueIdx < queue.length) {
      const [node, dist] = queue[queueIdx++];

      if (distances[node] !== -1) continue;
      distances[node] = dist;

      trees[node].forEach((next) => {
        if (distances[next] == -1) queue.push([next, dist + 1]);
      });
    }

    return distances.slice(1);
  }

  const result = testCase.map((el) => BFS(el));

  console.log(result.map((el) => el.join(" ")).join("\n"));
}

solution(input);
