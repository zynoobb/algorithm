const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, arr] = data;

  const table = {
    R: 0,
    B: 0,
  };
  table[arr[0]] = 1;

  for (let i = 1; i < +n; i++) {
    if (arr[i - 1] !== arr[i]) {
      table[arr[i]] += 1;
    }
  }

  const min = Math.min(...Object.values(table));

  console.log(min + 1);
}

solution(input);
