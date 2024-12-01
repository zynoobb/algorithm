const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const n = +data[0];

  const set = new Set();

  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      set.add(i * j);
    }
  }

  console.log(set.has(n) ? 1 : 0);
}

solution(input);
