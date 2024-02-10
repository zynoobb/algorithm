const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const arr = data[0].split(" ").map((el) => Math.floor(el / 2));

  console.log(Math.min(...arr));
}

solution(input);
