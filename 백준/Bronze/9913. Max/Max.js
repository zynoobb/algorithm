const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();
  const obj = {};
  data.forEach((el) => (obj[el] = (obj[el] || 0) + 1));

  const max = Math.max(...Object.values(obj));

  console.log(max);
}

solution(input);
