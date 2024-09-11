const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, m] = data.shift().split(" ").map(Number);
  const [a, b] = [data.slice(0, n), data.slice(n, n + m)];

  const set = new Set();
  a.forEach((name) => set.add(name));

  let result = 0;
  b.forEach((name) => {
    if (set.has(name)) result++;
  });

  console.log(result);
}

solution(input);
