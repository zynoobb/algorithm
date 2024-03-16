const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const arr = data[0].split(" ").map(Number);
  const factorial = (x) => (x ? x * factorial(x - 1) : 1);

  const [n, ...abc] = arr.map((el) => factorial(el));
  const result = abc.reduce((acc, cur) => acc / cur, n);

  console.log(result);
}

solution(input);
