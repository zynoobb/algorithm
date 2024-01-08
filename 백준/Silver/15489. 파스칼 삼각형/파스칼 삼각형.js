const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [R, C, W] = data[0].split(" ").map(Number);

  const dp = [[1], [1, 1]];

  for (let i = 2; i <= 30; i++) {
    const temp = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) temp.push(1);
      else temp.push(dp[i - 1][j - 1] + dp[i - 1][j]);
    }
    dp.push(temp);
  }

  let result = 0;

  const K = R - 1;
  for (let i = K; i < W + K; i++) {
    for (let j = 0; j < i - K + 1; j++) {
      result += dp[i][C - 1 + j];
    }
  }

  console.log(result);
}

solution(input);
