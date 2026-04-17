const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  if (data.length === 1 && data[0] === "0 0") {
    console.log(0);
    return;
  } else if (data.length === 1) {
    console.log(-1);
    return;
  }

  const [a, coins] = data.map((el) => el.split(" ").map(Number));
  const target = a[1];
  const limit = 2000;

  const visited = new Set();
  let queue = [[0, 0]];
  let idx = 0;
  let result = -1;

  while (idx < queue.length) {
    const [cur, cnt] = queue[idx++];
    if (cur === target) {
      result = cnt;
      break;
    }

    for (const coin of coins) {
      const next = cur + coin;
      if (-limit > next || next > limit) continue;
      if (visited.has(next)) continue;
      visited.add(next);
      queue.push([next, cnt + 1]);
    }
  }

  console.log(result);
}

solution(input);
