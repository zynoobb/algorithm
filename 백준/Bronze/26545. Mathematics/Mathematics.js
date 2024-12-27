const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, ...arr] = data.map(Number);

  const result = arr.reduce((ac, cur) => {
    return ac + cur;
  }, 0);

  console.log(result);
}

solution(input);
