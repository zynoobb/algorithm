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
    right = Math.max(...arr);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const cnt = arr.reduce((acc, cur) => {
      return acc + Math.floor(cur / mid);
    }, 0);

    if (K > cnt) right = mid - 1;
    else left = mid + 1;
  }

  const result = arr.reduce((acc, cur) => acc + cur) - K * right;

  console.log(result);
}

solution(input);
