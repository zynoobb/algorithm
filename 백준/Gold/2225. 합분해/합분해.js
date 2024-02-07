const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [N, K] = data[0].split(" ").map(Number);

  const dp = Array.from({ length: K + 1 }, () => {
    return Array.from({ length: N + 1 }, () => 0);
  });

  dp[0][0] = 1;

  for (let i = 1; i <= K; i++) {
    for (let j = 0; j <= N; j++) {
      dp[i][j] = dp[i - 1][j] + (j > 0 ? dp[i][j - 1] : 0);
      dp[i][j] %= 1000000000;
    }
  }

  console.log(dp[K][N]);
}

solution(input);
