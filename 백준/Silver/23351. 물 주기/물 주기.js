const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, k, a, b] = data[0].split(" ").map(Number);

  let arr = Array.from({ length: n }, () => k);

  let result = 0;

  while (true) {
    const notZero = arr.filter((el) => el).length;
    if (notZero !== n) break;

    for (let i = 0; i < a; i++) arr[i] += b;

    arr = arr.map((el) => el - 1).sort((a, b) => a - b);
    result++;
  }

  console.log(result);
}

solution(input);
