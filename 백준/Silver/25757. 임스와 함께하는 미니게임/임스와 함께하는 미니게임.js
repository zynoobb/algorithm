const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [_, order] = data.shift().split(" ");
  const n = new Set(data).size;
  const table = {
    Y: 1,
    F: 2,
    O: 3,
  };

  console.log(Math.floor(n / table[order]));
}

solution(input);
