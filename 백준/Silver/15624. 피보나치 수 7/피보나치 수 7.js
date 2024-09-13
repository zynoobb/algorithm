const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const n = +data[0];

  const dp = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }

  console.log(dp[n]);
}

solution(input);
