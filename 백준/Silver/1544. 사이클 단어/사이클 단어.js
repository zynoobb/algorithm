const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data.shift();

  const table = {};
  let result = 0;

  for (let i = 0; i < N; i++) {
    const len = data[i].length;
    let check = false;
    for (let j = 0; j < len; j++) {
      const str = data[i].slice(j) + data[i].slice(0, j);
      if (!table[str]) {
        check = true;
        table[str] = 1;
      } else table[str] += 1;
    }
    if (check) result++;
  }

  console.log(result);
}

solution(input);
