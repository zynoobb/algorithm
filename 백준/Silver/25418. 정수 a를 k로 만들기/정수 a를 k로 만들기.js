const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  let [n, k] = data[0].split(" ").map(Number);

  let cnt = 0;

  while (true) {
    if (n == k) {
      console.log(cnt);
      return;
    }

    if (k % 2 === 0 && k >= n * 2) k /= 2;
    else k -= 1;

    cnt++;
  }
}

solution(input);
