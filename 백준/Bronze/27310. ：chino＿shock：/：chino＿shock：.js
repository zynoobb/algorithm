const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const str = data[0];
  let underBar = 0,
    column = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ":") column++;
    else if (str[i] === "_") underBar++;
  }
  console.log(str.length + column + underBar * 5);
}

solution(input);
