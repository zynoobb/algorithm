const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [temp, map] = data;
  const [len, jump] = temp.split(" ").map(Number);

  const visited = Array.from({ length: len + 1 }, () => false);
  visited[0] = true;
  const queue = [0];
  let idx = 0;
  let result = "NO";

  while (idx < queue.length) {
    const cur = queue[idx++];
    if (cur === len - 1) {
      result = "YES";
      break;
    }
    const nexts = [cur + 1, cur + jump];

    for (const next of nexts) {
      if (map[next] === "#" || next >= len || visited[next]) continue;
      visited[next] = true;
      queue.push(next);
    }
  }

  console.log(result);
}

solution(input);
