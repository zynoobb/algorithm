const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, m] = data.shift().split(" ").map(Number);
  const table = {};
  for (let i = 0; i < n; i++) {
    table[data[i]] = true;
    for (let j = 0; j < data[i].length; j++) {
      table[data[i].slice(0, -j)] = true;
    }
  }
  let result = 0;
  for (let i = n; i < data.length; i++) {
    if (table[data[i]]) result++;
  }

  console.log(result);
}

solution(input);
