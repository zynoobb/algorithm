const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data[0],
    arr = data[1].split(" ").map(Number);

  let gain = 0,
    result = 0;

  for (let i = N - 1; i >= 0; i--) {
    gain = Math.max(gain, arr[i]);
    result = Math.max(result, gain - arr[i]);
  }

  console.log(result);
}

solution(input);
