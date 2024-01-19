const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();
  const testCase = data
    .filter((_, idx) => idx % 2 == 1)
    .map((el) => el.split(" ").map(Number));

  const result = testCase.map((el) => act(el));
  console.log(result.join("\n"));
}

function act(arr) {
  const dp = Array.from({ length: arr.length }, () => 0);

  dp[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    dp[i] = Math.max(dp[i - 1] + arr[i], arr[i]);
  }

  return Math.max(...dp);
}

solution(input);
