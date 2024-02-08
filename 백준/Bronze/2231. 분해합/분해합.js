const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data[0];

  let idx = 1;
  let result = 0;
  while (idx < N) {
    let temp =
      String(idx)
        .split("")
        .reduce((acc, cur) => acc + +cur, 0) + idx;

    if (temp === N) {
      result = idx;
      break;
    }
    idx++;
  }

  console.log(result);
}

solution(input);
