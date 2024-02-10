const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data[0];

  const dp = [null, 1, 0, 1, 1];

  for (let i = 5; i <= N; i++) {
    dp.push(dp[i - 1] + dp[i - 3] + dp[i - 4] === 3 ? 0 : 1);
  }

  console.log(dp[N] ? "SK" : "CY");
}

solution(input);
