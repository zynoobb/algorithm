const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const n = +data[0];

  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[0] = 1;
  dp[1] = 3;

  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1] * 2) % 9901;
  }
  console.log(dp.at(-1));
}

solution(input);

// 1 : 3
// 2 : 7
// 3 : 17
