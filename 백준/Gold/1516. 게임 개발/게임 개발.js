const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data.shift();
  const arr = data.map((el) => el.split(" ").map(Number));

  const graph = Array.from({ length: N + 1 }, () => []);
  const times = Array.from({ length: N + 1 }, () => 0);
  const rank = Array.from({ length: N + 1 }, () => 0);
  const dp = Array.from({ length: N + 1 }, () => 0);

  arr.forEach((el, idx) => {
    times[idx + 1] = el[0];
    for (let j = 1; j < el.length; j++) {
      if (el[j] === -1) break;
      graph[el[j]].push(idx + 1);
      rank[idx + 1]++;
    }
  });

  const queue = [];
  let queueIdx = 0;
  for (let i = 1; i <= N; i++) {
    if (!rank[i]) {
      queue.push(i);
      dp[i] = times[i];
    }
  }

  while (queueIdx < queue.length) {
    const node = queue[queueIdx++];
    graph[node].forEach((next) => {
      rank[next]--;
      dp[next] = Math.max(dp[next], dp[node] + times[next]);
      if (!rank[next]) queue.push(next);
    });
  }

  dp.shift();
  console.log(dp.join("\n"));
}

solution(input);
