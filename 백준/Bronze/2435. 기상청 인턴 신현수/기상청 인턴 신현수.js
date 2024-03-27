const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[n, m], arr] = data.map((el) => el.split(" ").map(Number));

  const table = {};
  table[-1] = 0;

  arr.reduce((acc, cur, idx) => {
    table[idx] = acc + cur;
    return acc + cur;
  }, 0);

  let max = -Infinity;

  for (let i = 0; i <= n - m; i++) {
    let cnt = table[i + m - 1] - table[i - 1];
    max = Math.max(max, cnt);
  }

  console.log(max);
}

solution(input);
