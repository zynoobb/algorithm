const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  let [N, a, b] = data[0].split(" ").map(Number);

  let result = 0;
  while (a !== b) {
    a -= Math.floor(a / 2);
    b -= Math.floor(b / 2);

    result++;
  }

  console.log(result);
}

solution(input);
