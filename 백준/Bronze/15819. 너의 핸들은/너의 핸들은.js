const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, m] = data.shift().split(" ").map(Number);

  const sorted = data.sort((a, b) => a.localeCompare(b));

  console.log(sorted[m - 1]);
}

solution(input);
