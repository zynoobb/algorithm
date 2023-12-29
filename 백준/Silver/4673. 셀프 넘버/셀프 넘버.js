const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const table = {};

  for (let i = 1; i <= 10000; i++) {
    const str = String(i);
    let k = i;
    for (let j = 0; j < str.length; j++) {
      k += Number(str[j]);
    }
    table[k] = true;
  }

  const result = [];

  for (let i = 1; i <= 10000; i++) {
    if (!table[i]) result.push(i);
  }

  console.log(result.join("\n"));
}

solution(input);
