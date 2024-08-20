const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const str = data[0].split("");
  const result = str
    .map((el) => {
      return el.charCodeAt() > 96 ? el.toUpperCase() : el.toLowerCase();
    })
    .join("");

  console.log(result);
}

solution(input);
