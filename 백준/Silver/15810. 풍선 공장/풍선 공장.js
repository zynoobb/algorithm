const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[_, m], arr] = data.map((el) => el.split(" ").map(Number));
  let left = 0,
    right = Math.max(...arr) * m;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const balloons = arr.reduce((ac, cur) => {
      return ac + Math.floor(mid / cur);
    }, 0);

    m > balloons ? (left = mid + 1) : (right = mid - 1);
  }
  console.log(left);
}

solution(input);
