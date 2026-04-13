const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const n = data.shift();

  const correct = data.slice(0, n);
  const answer = data.slice(n, n * 2);

  let result = 0;
  correct.forEach((el, idx) => {
    if (el === answer[idx]) result++;
  });

  console.log(result);
}

solution(input);
