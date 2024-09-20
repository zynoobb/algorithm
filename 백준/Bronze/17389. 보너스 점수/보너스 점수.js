const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const str = data[1];

  let result = 0,
    bns = 0,
    i = 0;

  while (i < str.length) {
    if (str[i] === "O") {
      result += i + 1 + bns;
      bns++;
    } else bns = 0;

    i++;
  }

  console.log(result);
}

solution(input);
