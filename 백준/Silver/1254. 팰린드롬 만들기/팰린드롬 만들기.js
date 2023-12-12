const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const str = data[0];

  for (let i = 0; i < str.length; i++) {
    const a = str.slice(i);
    const b = a.split("").reverse().join("");
    if (a === b) {
      console.log(str.length + i);
      return;
    }
  }
}

solution(input);
