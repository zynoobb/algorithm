const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, k] = data[0].split(" ").map(Number);

  const [a, b, c] = [n, k, n - k].map((el) => factorial(el));

  console.log(a / (b * c));
}

function factorial(x) {
  if (x === 0 || x === 1) return 1;
  else return x * factorial(x - 1);
}

solution(input);
