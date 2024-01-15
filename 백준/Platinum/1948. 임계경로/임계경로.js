const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[N], _, ...arr] = data.map((el) => el.split(" ").map(Number));
  const [start, end] = arr.pop();

  const graph = Array.from({ length: N + 1 }, () => []);
  const graph_reverse = Array.from({ length: N + 1 }, () => []);
  const rank = Array.from({ length: N + 1 }, () => 0);

  arr.forEach(([s, e, w]) => {
    graph[s].push([e, w]);
    graph_reverse[e].push([s, w]);
    rank[e]++;
  });

  const dp = Array.from({ length: N + 1 }, () => 0);

  const queueForSort = [start];
  let queueIdx1 = 0;

  while (queueIdx1 < queueForSort.length) {
    const node = queueForSort[queueIdx1++];

    graph[node].forEach(([next, w]) => {
      rank[next]--;
      dp[next] = Math.max(dp[next], dp[node] + w);
      if (!rank[next]) queueForSort.push(next);
    });
  }

  const result1 = dp[end];
  console.log(result1);

  const visited = Array.from({ length: N + 1 }, () => false);
  let result2 = 0;

  const queueForBacktrack = [end];
  let queueIdx2 = 0;

  while (queueIdx2 < queueForBacktrack.length) {
    const node = queueForBacktrack[queueIdx2++];

    graph_reverse[node].forEach(([next, w]) => {
      if (dp[node] - w === dp[next]) {
        result2++;

        if (!visited[next]) {
          queueForBacktrack.push(next);
          visited[next] = true;
        }
      }
    });
  }
  console.log(result2);
}

solution(input);
