const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [a, b] = data;
  console.log(a.length >= b.length ? "go" : "no");
}

solution(input);
