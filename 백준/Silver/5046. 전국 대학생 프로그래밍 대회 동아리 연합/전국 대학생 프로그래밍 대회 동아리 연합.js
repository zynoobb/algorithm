const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, b, h, w] = data.shift().split(" ").map(Number);

  const result = [];
  for (let i = 0; i < h * 2; i += 2) {
    const t = +data[i];
    const k = Math.max(...data[i + 1].split(" ").map(Number));
    if (b >= n * t && k >= n) {
      result.push(n * t);
    }
  }

  console.log(result.length ? Math.min(...result) : "stay home");
}

solution(input);
