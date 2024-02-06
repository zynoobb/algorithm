const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  let cnt = 0;
  for (let i = 0; i < data[0].length - 3; i++) {
    if (data[0].slice(i, i + 4) === "DKSH") cnt++;
  }

  console.log(cnt);
}

solution(input);
