const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();

  const result = data.map((el) => act(el));
  console.log(result.join("\n"));
}

function act(str) {
  const [n, m, a, b] = str.split(" ").map(Number);

  let cnt = a;
  while (cnt <= n * m) {
    if ((cnt - a) % n === 0 && (cnt - b) % m === 0) return cnt;
    cnt += n;
  }
  return -1;
}

solution(input);
