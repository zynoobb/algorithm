const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [_, T] = data.shift().split(" ").map(Number);
  const arr = data.map(Number);
  let left = Math.min(...arr),
    right = left + T;

  let result = 0;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const gap = arr.reduce((ac, cur) => {
      return ac + (mid > cur ? mid - cur : 0);
    }, 0);

    if (T >= gap) {
      left = mid + 1;
      result = Math.max(result, mid);
    } else {
      right = mid - 1;
    }
  }
  console.log(result);
}

solution(input);
