const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();

  const result = data.map((str) => {
    const mid = str.length / 2;
    return str[mid - 1] === str[mid] ? "Do-it" : "Do-it-Not";
  });

  console.log(result.join("\n"));
}

solution(input);
