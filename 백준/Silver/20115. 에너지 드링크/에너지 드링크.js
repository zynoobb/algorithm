const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data[0];
  const arr = data[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let result = arr.at(-1);

  for (let i = 0; i < N - 1; i++) {
    result += arr[i] / 2;
  }

  console.log(result);
}

solution(input);
