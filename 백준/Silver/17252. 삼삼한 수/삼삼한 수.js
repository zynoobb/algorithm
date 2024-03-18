const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  let n = +data[0];
  if (n === 0) {
    console.log("NO");
    return;
  }

  let result = true;

  while (n) {
    if (n % 3 > 1) {
      result = false;
      break;
    }
    n = Math.floor(n / 3);
  }

  console.log(result ? "YES" : "NO");
}

solution(input);
