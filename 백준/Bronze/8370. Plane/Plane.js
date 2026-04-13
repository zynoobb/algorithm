const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [a, b, c, d] = data[0].split(" ").map(Number);
  console.log(a * b + c * d);
}

solution(input);
