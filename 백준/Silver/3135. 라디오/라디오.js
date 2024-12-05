const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [a, b] = data.shift().split(" ").map(Number);

  data.shift();
  const likes = data.map(Number);

  const dif = likes.map((el) => Math.abs(el - b) + 1);
  const minDif = Math.min(Math.abs(a - b), ...dif);
  console.log(minDif);
}

solution(input);
