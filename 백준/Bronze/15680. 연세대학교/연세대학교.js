const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  console.log(data[0] === "1" ? "Leading the Way to the Future" : "YONSEI");
}

solution(input);
