const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, a, b] = data[0].split(" ").map(Number);

  const obj = {};

  let x = 0,
    y = 0,
    z = 0;

  for (let i = 1; i <= n; i++) {
    if (i % a === 0 && i % b === 0) z++;
    else if (i % a === 0) x++;
    else if (i % b === 0) y++;
  }

  console.log(x, y, z);
}

solution(input);
