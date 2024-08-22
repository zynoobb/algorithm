const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const costs = data[1].split(" ").map(Number);

  const total = costs.reduce((a, c) => a + c);
  const max = Math.max(...costs);
  console.log(total - max);
}

solution(input);
