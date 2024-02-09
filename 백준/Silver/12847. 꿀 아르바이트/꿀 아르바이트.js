const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[n, m], arr] = data.map((el) => el.split(" ").map(Number));

  let max = 0,
    total = 0;

  for (let i = 0; i < m; i++) total += arr[i];
  max = total;

  for (let i = m; i < n; i++) {
    total += arr[i] - arr[i - m];
    max = Math.max(max, total);
  }

  console.log(max);
}

solution(input);
