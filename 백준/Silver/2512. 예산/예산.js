const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[_], arr, [m]] = data.map((el) => el.split(" ").map(Number));
  let [left, right] = [0, Math.max(...arr)];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const budget = arr.reduce((ac, cur) => {
      return ac + (cur > mid ? mid : cur);
    }, 0);
    budget > m ? (right = mid - 1) : (left = mid + 1);
  }

  console.log(right);
}

solution(input);
