const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const arr = data.filter((_, idx) => idx % 2 === 1);
  const total = arr.pop();

  let cost = arr.reduce((ac, cur) => {
    const [a, b] = cur.split(" ").map(Number);
    return ac + a * b;
  }, 0);

  console.log(cost >= total ? "PAY" : "PROTEST");
}

solution(input);
