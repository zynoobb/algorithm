const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[N, K, Q], ...arr] = data.map((el) => el.split(" ").map(Number));

  const result = arr.map(([a, b]) => act([a, b], K));
  console.log(result.join("\n"));
}

function act([a, b], K) {
  if (K === 1) return Math.abs(a - b);

  let x = a,
    y = b,
    cnt = 0;

  while (x !== y) {
    if (x > y) x = Math.floor((x - 2) / K) + 1;
    else y = Math.floor((y - 2) / K) + 1;
    cnt++;
  }
  return cnt;
}

solution(input);
