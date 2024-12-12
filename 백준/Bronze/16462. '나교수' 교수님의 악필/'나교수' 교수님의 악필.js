const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const n = +data.shift();

  const scores = data.map(Number);

  const sum = scores.reduce((acc, cur) => {
    const replace = String(cur).replaceAll(0, 9);
    const trans = +replace.replaceAll(6, 9);
    return acc + (trans > 100 ? 100 : trans);
  }, 0);

  console.log(Math.round(sum / n));
}

solution(input);
