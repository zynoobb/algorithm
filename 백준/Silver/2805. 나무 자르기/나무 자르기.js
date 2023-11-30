const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[_, m], arr] = data.map((el) => el.split(" ").map(Number));
  let start = 0;
  let end = Math.max(...arr);

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const trees = arr.reduce((acc, cur) => {
      return acc + (cur - mid > 0 ? cur - mid : 0);
    }, 0);

    if (trees >= m) start = mid + 1;
    else end = mid - 1;
  }
  console.log(end);
}

solution(input);
