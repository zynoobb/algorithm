const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [N, M] = data.shift().split(" ").map(Number);
  const arr = data.map(Number).sort((a, b) => a - b);

  let result = [0, 0];
  for (let i = 0; i < M; i++) {
    const eggs = Math.min(M - i, N);
    if (result[1] < arr[i] * eggs) {
      result = [arr[i], arr[i] * eggs];
    }
  }

  console.log(...result);
}

solution(input);
