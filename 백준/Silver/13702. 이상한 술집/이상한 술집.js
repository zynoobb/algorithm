const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [N, K] = data.shift().split(" ").map(Number);
  const arr = data.map(Number);

  let left = 0,
    right = Math.max(...arr),
    result = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sum = arr.reduce((ac, cur) => {
      return ac + Math.floor(cur / mid);
    }, 0);

    if (K > sum) {
      right = mid - 1;
    } else {
      left = mid + 1;
      result = mid;
    }
  }
  console.log(result);
}

solution(input);
