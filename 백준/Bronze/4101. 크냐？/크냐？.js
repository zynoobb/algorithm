const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.pop();
  const arr = data.map((el) => el.split(" ").map(Number));
  const result = arr.map((el) => (el[0] > el[1] ? "Yes" : "No"));
  console.log(result.join("\n"));
}

solution(input);
