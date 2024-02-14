const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, m] = data.map((el) => parseInt(el, 2));
  const queue = [[n, 0]];
  let queueIdx = 0;

  const visited = {};
  visited[n] = true;
  while (queueIdx < queue.length) {
    const [node, cnt] = queue[queueIdx++];
    if (node === m) {
      console.log(cnt);
      return;
    }

    for (let i = node.toString(2).length - 2; i >= 0; i--) {
      let newNode = node ^ (1 << i);

      // if ((node & (1 << i)) !== 1 << i) newNode = node | (1 << i);
      // else newNode = node & ~(1 << i);
      if (!visited[newNode]) {
        queue.push([newNode, cnt + 1]);
        visited[newNode] = true;
      }
    }

    if (!visited[node + 1]) {
      queue.push([node + 1, cnt + 1]);
      visited[node + 1] = true;
    }
    if (node && !visited[node - 1]) {
      queue.push([node - 1, cnt + 1]);
      visited[node - 1] = true;
    }
  }
}

solution(input);
