const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const n = +data[0];
  const arr = data[1].split(" ").map(Number);

  let [start, end] = [0, n - 1];
  let min = Math.abs(arr[end] + arr[start]);
  let [leftIdx, rightIdx] = [start, end];

  while (start < end) {
    const mid = arr[start] + arr[end];

    if (Math.abs(mid) < min) {
      [leftIdx, rightIdx] = [start, end];
      min = Math.abs(mid);
    }
    if (min == 0) break;
    else mid < 0 ? (start += 1) : (end -= 1);
  }

  console.log(arr[leftIdx], arr[rightIdx]);
}

solution(input);
