const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [D, H, W] = data[0].split(" ").map(Number);

  const ratio = D / Math.sqrt(H ** 2 + W ** 2);

  const result = [H, W].map((el) => Math.floor(el * ratio));
  console.log(...result);
}

solution(input);
