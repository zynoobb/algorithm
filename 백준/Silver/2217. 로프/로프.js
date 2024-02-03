const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data.shift();
  const arr = data.map(Number).sort((a, b) => b - a);

  let max = 0;
  for (let i = 0; i < N; i++) max = Math.max(max, arr[i] * (i + 1));

  console.log(max);
}

solution(input);
