const { verify } = require("crypto");
const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [N, ...arr] = data.map(Number);

  const stack = [];
  const result = [];
  let cnt = 1;
  let status = false;

  for (let i = 0; i < N; i++) {
    while (cnt <= arr[i]) {
      stack.push(cnt);
      result.push("+");
      cnt++;
    }

    if (stack.at(-1) === arr[i]) {
      stack.pop();
      result.push("-");
    } else break;

    if (i === N - 1) status = true;
  }

  console.log(status ? result.join("\n") : "NO");
}

solution(input);
