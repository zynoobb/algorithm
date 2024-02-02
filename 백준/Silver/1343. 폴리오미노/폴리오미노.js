const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const str = data[0].replaceAll("XXXX", "AAAA").replaceAll("XX", "BB");

  console.log(str.indexOf("X") === -1 ? str : -1);
}

solution(input);
