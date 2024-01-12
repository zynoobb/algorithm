const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();
  const arr = data.map((el) => el.split(" ").map(Number));
  const testCase = [];

  let temp = [];
  arr.forEach((el) => {
    temp.push(el);
    if (el.length === 1) {
      testCase.push(temp);
      temp = [];
    }
  });

  const result = testCase.map((el) => topological(el));
  console.log(result.join("\n"));
}

function topological(tc) {
  const [W] = tc.pop();
  const [[N, _], times, ...edges] = tc;
  times.unshift(0);

  const graph = Array.from({ length: N + 1 }, () => []);
  const rank = Array.from({ length: N + 1 }, () => 0);
  const dp = Array.from({ length: N + 1 }, () => 0);

  edges.forEach(([a, b]) => {
    graph[a].push(b);
    rank[b]++;
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

  return dp[W];
}

solution(input);
