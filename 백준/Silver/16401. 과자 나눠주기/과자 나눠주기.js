const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[n, m], arr] = data.map((el) => el.split(" ").map(Number));
  let [left, right] = [0, Math.max(...arr)];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const cookies = arr.reduce((ac, cur) => {
      return ac + Math.floor(cur / mid);
    }, 0);

    cookies >= n ? (left = mid + 1) : (right = mid - 1);
  }

  console.log(right);
}

solution(input);
