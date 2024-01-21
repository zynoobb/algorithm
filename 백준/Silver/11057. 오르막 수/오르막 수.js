const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data[0];

  const dp = Array.from({ length: 10 }, () => 1);

  for (let i = 1; i < N; i++) {
    for (let j = 1; j < 10; j++) {
      dp[j] += dp[j - 1] % 10007;
    }
  }

  const result = dp.reduce((ac, cur) => ac + cur, 0) % 10007;
  console.log(result);
}

solution(input);
