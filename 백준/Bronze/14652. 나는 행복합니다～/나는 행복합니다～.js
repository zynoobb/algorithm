const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [x, y, z] = data[0].split(" ").map(Number);

  const result = [Math.floor(z / y), z % y];
  console.log(...result);
}

solution(input);
