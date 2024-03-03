const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const arr = data[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let cnt = arr[0];
  let result = 0;

  for (let i = 1; i < arr.length; i++) {
    result += cnt * arr[i];
    cnt += arr[i];
  }

  console.log(result);
}

solution(input);
