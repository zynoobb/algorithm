const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[N, M], arr] = data.map((el) => el.split(" ").map(Number));

  let [left, right, sum] = [0, 0, 0];
  const result = [];
  while (right <= N) {
    if (sum >= M) {
      result.push(right - left);
      sum -= arr[left];
      left++;
    } else {
      sum += arr[right];
      right++;
    }
  }

  console.log(result.length ? Math.min(...result) : 0);
}

solution(input);
