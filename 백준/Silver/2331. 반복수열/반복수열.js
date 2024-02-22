const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, p] = data[0].split(" ").map(Number);

  const arr = [n],
    table = {};
  table[n] = true;

  let last = n;

  while (true) {
    const reduced = String(last)
      .split("")
      .reduce((acc, cur) => acc + Math.pow(cur, p), 0);

    last = reduced;
    if (table[reduced]) break;
    arr.push(reduced);
    table[reduced] = true;
  }

  console.log(arr.indexOf(last));
}

solution(input);
