const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[r, c], [a, b]] = data.map((el) => el.split(" ").map(Number));

  let firstRow = "";
  const black = "X",
    white = ".";
  for (let i = 0; i < c; i++) {
    firstRow += i % 2 === 0 ? black.repeat(b) : white.repeat(b);
  }

  const secondRow = firstRow
    .split("")
    .map((el) => (el === "X" ? "." : "X"))
    .join("");

  let result = [];

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < a; j++) {
      result.push(i % 2 === 0 ? firstRow : secondRow);
    }
  }

  console.log(result.join("\n"));
}

solution(input);
