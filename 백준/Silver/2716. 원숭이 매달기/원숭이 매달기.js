const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data.shift();

  const result = data.map((el) => act(el));
  console.log(result.join("\n"));
}

function act(str) {
  const stack = [];
  let max = 0;

  for (let v of str) {
    if (v === "[") stack.push(v);
    else {
      max = Math.max(max, stack.length);
      stack.pop();
    }
  }

  return 2 ** max;
}

solution(input);
