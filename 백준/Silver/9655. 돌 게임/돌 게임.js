const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data[0];

  const dp = [null, 1, 0, 1];

  for (let i = 4; i <= N; i++) {
    dp.push(dp[i - 3] + dp[i - 1] === 2 ? 0 : 1);
  }

  console.log(dp[N] ? "SK" : "CY");
}

solution(input);
