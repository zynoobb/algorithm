const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [a, b] = data
    .filter((_, idx) => idx % 2 === 1)
    .map((el) => el.split(" ").map((str) => str.replace("Course", "")));

  const obj = {};
  a.forEach((el) => (obj[el] = true));

  const result = b.every((x) => obj[x]);

  console.log(result ? 1 : 0);
}

solution(input);
