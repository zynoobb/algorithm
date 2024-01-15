const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  let [a, b, c] = data[0].split(" ").map(Number);
  let result = 0;
  for (let i = 0; i <= c; i++) {
    const rest = (a % b) * 10;
    result = Math.floor(a / b);
    a = rest;
  }

  console.log(result);
}

solution(input);
