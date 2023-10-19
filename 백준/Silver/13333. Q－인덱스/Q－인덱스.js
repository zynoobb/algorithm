const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[n], arr] = data.map((el) => el.split(" ").map(Number));
  const sorted = arr.sort((a, b) => b - a);
  let result = 0;

  for (let i = 0; i < n; i++) {
    if (sorted[i] > result) result = i + 1;
    else break;
  }

  console.log(result);
}

solution(input);
