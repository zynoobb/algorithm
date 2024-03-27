const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data[0];
  if (!N) {
    console.log(0);
    return;
  }

  let cnt = 1,
    double = 1;

  while (N > double) {
    cnt++;
    double *= 2;
  }

  console.log(cnt);
}

solution(input);
