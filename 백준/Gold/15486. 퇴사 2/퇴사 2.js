const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const n = +data.shift();
  const dp = Array.from({ length: n + 1 }, () => 0);
  const days = [];
  const prices = [];

  data.forEach((el) => {
    const [day, price] = el.split(" ").map(Number);
    days.push(day);
    prices.push(price);
  });

  let max = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (n >= i + days[i]) {
      dp[i] = Math.max(prices[i] + dp[i + days[i]], max);
      max = dp[i];
    } else dp[i] = max;
  }

  console.log(max);
}

solution(input);
