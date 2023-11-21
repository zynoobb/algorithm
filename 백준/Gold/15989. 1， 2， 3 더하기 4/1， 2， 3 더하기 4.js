const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();

  const testCase = data.map(Number);
  const _max = Math.max(...testCase);

  const dp = makingDP(_max);
  const result = testCase.map((el) => dp[el]);
  console.log(result.join("\n"));
}

function makingDP(_max) {
  const dp = Array.from({ length: _max + 1 }, () => 0);
  dp[0] = 1;

  [1, 2, 3].forEach((el) => {
    for (let i = el; i < dp.length; i++) {
      dp[i] += dp[i - el];
    }
  });
  return dp;
}

solution(input);
