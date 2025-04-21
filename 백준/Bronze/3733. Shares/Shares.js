const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const result = data
    .map((el) => el.split(" ").map(Number))
    .map((k) => {
      const [a, b] = k;

      return Math.floor(b / (a + 1));
    });

  console.log(result.join("\n"));
}

solution(input);
