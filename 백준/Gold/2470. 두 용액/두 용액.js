const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const n = +data[0];
  const arr = data[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let [start, end] = [0, n - 1];
  let [resultLeft, resultRight] = [start, end];
  let min = Math.abs(arr[end] + arr[start]);

  while (start < end) {
    const mid = arr[start] + arr[end];

    if (min > Math.abs(mid)) {
      [resultLeft, resultRight] = [start, end];
      min = Math.abs(mid);
    }

    if (mid === 0) break;
    else if (mid < 0) start += 1;
    else end -= 1;
  }
  console.log(arr[resultLeft], arr[resultRight]);
}

solution(input);
