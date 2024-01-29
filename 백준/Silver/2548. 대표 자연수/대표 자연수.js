const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[N], arr] = data.map((el) => el.split(" ").map(Number));

  arr.sort((a, b) => a - b);
  const mid = Math.floor(N / 2) - 1;

  console.log(N % 2 == 0 ? arr[mid] : arr[mid + 1]);
}

solution(input);
