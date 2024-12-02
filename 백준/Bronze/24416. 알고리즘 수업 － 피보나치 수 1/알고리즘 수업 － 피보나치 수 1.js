const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const n = +data[0];

  const fib = Array.from({ length: n }, () => 0);
  (fib[0] = 1), (fib[1] = 1);

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  console.log(fib.at(-1), n - 2);
}

solution(input);
