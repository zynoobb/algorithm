const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const sqrt = Math.floor(Math.sqrt(+data[0]));
  console.log(`The largest square has side length ${sqrt}.`);
}

solution(input);
