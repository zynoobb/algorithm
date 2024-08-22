const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, a, b] = data;
  const after =
    n % 2 === 0
      ? a
      : a
          .split("")
          .map((el) => (el === "1" ? "0" : "1"))
          .join("");

  console.log(after === b ? "Deletion succeeded" : "Deletion failed");
}

solution(input);
