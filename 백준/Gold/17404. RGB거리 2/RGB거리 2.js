const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data.shift();
  const costs = data.map((el) => el.split(" ").map(Number));

  let result = Infinity;

  for (let i = 0; i < 3; i++) {
    const dp = Array.from({ length: N }, () => {
      return Array.from({ length: 3 }, () => Infinity);
    });
    dp[0][i] = costs[0][i];

    for (let j = 1; j < costs.length; j++) {
      dp[j][0] = costs[j][0] + Math.min(dp[j - 1][1], dp[j - 1][2]);
      dp[j][1] = costs[j][1] + Math.min(dp[j - 1][0], dp[j - 1][2]);
      dp[j][2] = costs[j][2] + Math.min(dp[j - 1][0], dp[j - 1][1]);
    }

    for (let k = 0; k < 3; k++) {
      if (i !== k) result = Math.min(result, dp.at(-1)[k]);
    }
  }

  console.log(result);
}

solution(input);
