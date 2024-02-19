const { verify } = require("crypto");
const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[N], arr] = data.map((el) => el.split(" ").map(Number));

  const nge = Array.from({ length: N }, () => -1);
  const stack = [];

  for (let i = 0; i < N; i++) {
    while (stack.length && arr[stack.at(-1)] < arr[i]) {
      const idx = stack.pop();
      nge[idx] = arr[i];
    }

    stack.push(i);
  }

  console.log(...nge);
}

solution(input);
