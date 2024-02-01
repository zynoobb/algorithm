const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data.shift();

  const passwords = {};
  data.forEach((el) => (passwords[el] = true));

  let idx = 0;
  while (true) {
    const reversed = data[idx++].split("").reverse().join("");

    if (passwords[reversed]) {
      const len = reversed.length;
      console.log(`${len} ${reversed[Math.floor(len / 2)]}`);
      break;
    }
  }
}

solution(input);
