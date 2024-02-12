const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data[0];

  const dp = Array.from({ length: N }, () => 0);
  (dp[0] = 1), (dp[1] = 2);
  (dp[2] = 3), (dp[3] = 5);

  for (let i = 4; i < N; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
  }

  console.log(dp[N - 1]);
}

solution(input);
