const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const arr = data[0].split(" ").map(Number);
  const N = arr.pop();
  const total = arr.reduce((acc, cur) => acc + cur, 0);

  console.log(N * 4 > total ? N * 4 - total : 0);
}

solution(input);
