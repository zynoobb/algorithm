const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [F, S, G, U, D] = data[0].split(" ").map(Number);

  const queue = [[S, 0]];
  let queueIdx = 0;
  let result = null;
  const visited = {};

  while (queueIdx < queue.length) {
    const [node, cnt] = queue[queueIdx++];
    if (node === G) {
      result = cnt;
      break;
    }

    if (visited[node]) continue;

    visited[node] = true;
    const [nextUp, nextDown] = [node + U, node - D];

    if (F >= nextUp) queue.push([nextUp, cnt + 1]);
    if (nextDown >= 1) queue.push([nextDown, cnt + 1]);
  }

  console.log(result !== null ? result : "use the stairs");
}

solution(input);
