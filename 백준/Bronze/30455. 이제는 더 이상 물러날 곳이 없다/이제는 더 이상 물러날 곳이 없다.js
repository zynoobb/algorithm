const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data[0];

  console.log(N % 2 === 0 ? "Duck" : "Goose");
}

solution(input);
