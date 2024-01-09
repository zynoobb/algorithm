const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const result = data[1]
    .split(" ")
    .map(Number)
    .filter((el, idx) => el !== idx + 1).length;

  console.log(result);
}

solution(input);
