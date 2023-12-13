const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, m] = data.shift().split(" ").map(Number);
  const arr = data.map(Number).sort((a, b) => a - b);

  let left = 0,
    right = 1,
    result = Infinity;

  while (left <= right && right < n) {
    const temp = arr[right] - arr[left];

    if (m > temp) right++;
    else if (temp > m) {
      left++;
      result = Math.min(result, temp);
    } else {
      result = temp;
      break;
    }
  }
  console.log(result);
}

solution(input);
