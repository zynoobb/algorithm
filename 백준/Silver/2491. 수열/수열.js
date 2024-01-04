const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data[0];
  const arr = data[1].split(" ").map(Number);

  const lowDP = Array.from({ length: N }, () => 1),
    highDP = Array.from({ length: N }, () => 1);

  for (let i = 0; i < N - 1; i++) {
    if (arr[i + 1] >= arr[i]) highDP[i + 1] += highDP[i];
    if (arr[i] >= arr[i + 1]) lowDP[i + 1] += lowDP[i];
  }
  console.log(Math.max(...lowDP, ...highDP));
}

solution(input);
