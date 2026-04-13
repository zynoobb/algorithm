const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [d, h, m] = data[0].split(" ").map(Number);
  const t = 11 * 24 * 60 + 11 * 60 + 11;
  const b = d * 24 * 60 + h * 60 + m;
  console.log(b - t >= 0 ? b - t : -1);
}

solution(input);
