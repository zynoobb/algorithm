const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data[0];

  let [left, right, sum, result] = [1, 1, 1, 0];

  while (right <= N) {
    if (sum == N) result++;

    if (sum >= N) {
      sum -= left;
      left++;
    } else {
      right++;
      sum += right;
    }
  }

  console.log(result);
}

solution(input);
