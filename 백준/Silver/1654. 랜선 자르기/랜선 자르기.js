const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [_, m] = data.shift().split(" ").map(Number);
  const arr = data.map(Number);

  let start = 0;
  let end = Math.max(...arr);

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const counts = arr.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);
    if (counts >= m) start = mid + 1;
    else end = mid - 1;
  }

  console.log(end);
}

solution(input);
