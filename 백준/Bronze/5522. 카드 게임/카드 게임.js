const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const result = data.map(Number).reduce((a, c) => a + c);

  console.log(result);
}

solution(input);
