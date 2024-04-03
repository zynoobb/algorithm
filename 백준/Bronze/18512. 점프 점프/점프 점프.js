const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  let [x, y, p1, p2] = data[0].split(" ").map(Number);
  let cnt = 0;

  while (p1 !== p2) {
    if (p1 > p2) p2 += y;
    if (p2 > p1) p1 += x;

    cnt++;

    if (cnt > 1000) {
      console.log(-1);
      return;
    }
  }

  console.log(p1);
}

solution(input);
