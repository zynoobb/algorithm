const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data.shift();
  const testCase = [];

  for (let i = 0; i < N * 2; i += 2) {
    testCase.push(data.slice(i, i + 2));
  }

  const result = testCase.map((el) => act(el));
  console.log(result.join("\n"));
}

function act(list) {
  const [[N], arr] = list.map((el) => el.split(" ").map(Number));
  const visited = Array.from({ length: N + 1 }, () => 0);
  arr.unshift(0);
  let cnt = 0;

  function DFS(x) {
    const queue = [x];
    let queueIdx = 0;

    while (queueIdx < queue.length) {
      const node = queue[queueIdx++];

      if (visited[node]) continue;

      visited[node] = cnt;
      queue.push(arr[node]);
    }
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      cnt++;
      DFS(i);
    }
  }

  return cnt;
}

solution(input);
