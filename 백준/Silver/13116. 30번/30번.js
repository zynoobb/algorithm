const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();

  const result = data.map((el) => act(el));
  console.log(result.join("\n"));
}

function act(str) {
  const [a, b] = str.split(" ").map(Number);

  let x = Math.floor(a),
    y = Math.floor(b);

  while (x !== y) {
    if (x > y) x = Math.floor(x / 2);
    else y = Math.floor(y / 2);
  }

  return x * 10;
}

solution(input);
