const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();

  let idx = 0;
  while (true) {
    if (data[idx].includes("S")) {
      console.log(data[idx]);
      return;
    }
    idx++;
  }
}

solution(input);
