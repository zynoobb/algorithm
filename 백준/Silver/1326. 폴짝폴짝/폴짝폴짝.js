const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[N], arr, [start, end]] = data.map((el) => el.split(" ").map(Number));

  const visited = Array.from({ length: N }, () => -1);
  visited[start - 1] = 0;

  const queue = [[start - 1, 0]];
  let queueIdx = 0;

  while (queueIdx < queue.length) {
    const [node, cnt] = queue[queueIdx++];

    const dist = arr[node];

    let minus = node,
      plus = node;

    while (true) {
      minus -= dist;
      if (minus < 0) break;
      if (visited[minus] == -1) {
        visited[minus] = cnt + 1;
        queue.push([minus, cnt + 1]);
      }
    }

    while (true) {
      plus += dist;
      if (plus >= N) break;
      if (visited[plus] == -1) {
        visited[plus] = cnt + 1;
        queue.push([plus, cnt + 1]);
      }
    }
  }
  console.log(visited[end - 1]);
}

solution(input);
