const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[N, M], arr] = data.map((el) => el.split(" ").map(Number));

  let [left, right, result, sum] = [0, 0, 0, 0];

  while (right <= N) {
    if (sum == M) result++;

    if (sum > M) {
      sum -= arr[left];
      left++;
    } else {
      sum += arr[right];
      right++;
    }
  }

  console.log(result);
}

solution(input);
