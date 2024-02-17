const { verify } = require("crypto");
const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[n, k], arr] = data.map((el) => el.split(" ").map(Number));
  arr.sort((a, b) => a - b);

  let left = 0,
    right = n - 1,
    cnt = 0;

  while (left < right) {
    if (arr[left] + arr[right] > k) right--;
    else {
      cnt++;
      right--;
      left++;
    }
  }

  console.log(cnt);
}

solution(input);
