const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[N], arr] = data.map((el) => el.split(" ").map(Number));

  let left = 0,
    right = N - 1;

  let result = arr[left] + arr[right];

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (Math.abs(result) > Math.abs(sum)) result = sum;

    sum < 0 ? left++ : right--;
  }

  console.log(result);
}

solution(input);
