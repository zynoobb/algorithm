const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const arr = data[1].split(" ").map(Number);

  const table = {};
  arr.forEach((el) => (table[el] = true));

  let cnt = 1;

  while (true) {
    if (!table[cnt++]) {
      console.log(cnt - 1);
      return;
    }
  }
}

solution(input);
