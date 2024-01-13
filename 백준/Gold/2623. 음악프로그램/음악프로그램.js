const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[N, M], ...arr] = data.map((el) => el.split(" ").map(Number));

  const graph = Array.from({ length: N + 1 }, () => []);
  const rank = Array.from({ length: N + 1 }, () => 0);

  arr.forEach((unit) => {
    for (let j = 1; j < unit.length - 1; j++) {
      graph[unit[j]].push(unit[j + 1]);
      rank[unit[j + 1]]++;
    }
  });

  const queue = [];
  let queueIdx = 0;
  const result = [];

  for (let i = 1; i <= N; i++) {
    if (!rank[i]) queue.push(i);
  }

  while (queueIdx < queue.length) {
    const node = queue[queueIdx++];
    result.push(node);

    graph[node].forEach((next) => {
      rank[next]--;
      if (!rank[next]) queue.push(next);
    });
  }

  console.log(result.length === N ? result.join("\n") : "0");
}

solution(input);
