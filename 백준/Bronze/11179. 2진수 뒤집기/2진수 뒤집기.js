const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const n = +data[0];
  const binary = n.toString(2);
  const reverse = binary.split("").reverse().join("");

  console.log(parseInt(reverse, 2));
}

solution(input);
