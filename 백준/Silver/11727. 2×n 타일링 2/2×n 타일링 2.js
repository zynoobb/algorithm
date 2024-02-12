const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data[0];

  const dp = Array.from({ length: N }, () => 0);
  (dp[0] = 1), (dp[1] = 3);

  for (let i = 2; i < N; i++) {
    dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
  }

  console.log(dp[N - 1]);
}

solution(input);
