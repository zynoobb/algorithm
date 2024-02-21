const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data.shift();

  const stack = [];
  let result = 0;

  for (let i = 0; i < N; i++) {
    if (data[i] === "0" && stack.length) {
      stack.at(-1)[1]--;
      if (stack.at(-1)[1] === 0) result += stack.pop()[0];
    } else {
      const [_, score, T] = data[i].split(" ").map(Number);
      if (T === 1) result += score;
      else stack.push([score, T - 1]);
    }
  }

  console.log(result);
}

solution(input);
