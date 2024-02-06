const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[N, M], arr] = data.map((el) => el.split(" ").map(Number));

  let min = Infinity;
  for (let i = 0; i < N - 1; i++) {
    min = Math.min(min, arr[i] + arr[i + 1]);
  }

  console.log(min * M);
}

solution(input);
