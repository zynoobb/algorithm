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
  const [n, m] = str.split(" ").map(Number);
  let cnt = 0;
  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const k = (i ** 2 + j ** 2 + m) / (i * j);
      if (k === Math.floor(k)) cnt++;
    }
  }

  return cnt;
}

solution(input);
