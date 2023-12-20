const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data.shift();
  const [health, good] = data.map((el) =>
    [0].concat(el.split(" ").map(Number))
  );

  const dp = Array.from({ length: N + 1 }, () => {
    return Array.from({ length: 101 }, () => 0);
  });

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= 100; j++) {
      if (j >= health[i]) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - health[i]] + good[i]);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  console.log(dp[N][99]);
}

solution(input);
