const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const str = data[0];
  console.log(":fan::fan::fan:");
  console.log(`:fan::${str}::fan:`);
  console.log(":fan::fan::fan:");
}

solution(input);
