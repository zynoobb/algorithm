const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, m] = data[0].split(" ").map(Number);

  let result = "";
  let idx = 0;
  while (idx < n && result.length < m) {
    idx++;
    result += n;
  }

  console.log(result.slice(0, m));
}

solution(input);
