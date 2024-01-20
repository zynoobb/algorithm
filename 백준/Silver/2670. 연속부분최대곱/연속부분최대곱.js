const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data.shift();

  const arr = data.map((el) => parseFloat(el));
  const dp = Array.from({ length: N }, (_, i) => arr[i]);

  for (let i = 1; i < N; i++) {
    dp[i] = Math.max(dp[i], dp[i - 1] * arr[i]);
  }

  const max = Math.max(...dp);
  console.log(max.toFixed(3));
}

solution(input);
