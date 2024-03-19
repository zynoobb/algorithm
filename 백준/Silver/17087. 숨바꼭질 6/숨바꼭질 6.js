const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[_, M], list] = data.map((el) => el.split(" ").map(Number));
  const arr = list.map((el) => (M - el >= 0 ? M - el : -M + el));
  let result = arr.shift();

  arr.forEach((el) => (result = getGCD(result, el)));

  console.log(result);
}

function getGCD(x, y) {
  let [a, b] = [Math.max(x, y), Math.min(x, y)];

  while (b > 0) {
    const temp = a % b;
    a = b;
    b = temp;
  }

  return a;
}

solution(input);
