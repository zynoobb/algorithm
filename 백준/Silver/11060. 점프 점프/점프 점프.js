const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data[0];
  const arr = data[1].split(" ").map(Number);

  const visited = Array.from({ length: N }, () => 0);
  const queue = [[0, 1]];
  let queueIdx = 0;
  let result = -1;

  while (queueIdx < queue.length) {
    const [idx, cnt] = queue[queueIdx++];
    if (idx === N - 1) {
      result = cnt - 1;
      break;
    }
    const node = arr[idx];
    if (visited[idx]) continue;
    visited[idx] = cnt;

    for (let i = idx; i <= idx + node; i++) {
      if (i > N - 1) continue;
      if (!visited[i]) queue.push([i, cnt + 1]);
    }
  }

  console.log(result);
}

solution(input);
