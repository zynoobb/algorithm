const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const testCase = data[1].split(" ").map(Number);

  const table = {};
  let cnt = 0;
  for (let i = 1; i < 80001; i++) {
    if (i % 3 === 0 || i % 7 === 0) {
      cnt += i;
    }
    table[i] = cnt;
  }

  const result = testCase.map((el) => table[el]);
  console.log(result.join("\n"));
}

solution(input);
