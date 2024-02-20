const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.pop();

  const result = data.map((el, idx) => {
    return `${idx + 1}. ${act(el)}`;
  });

  console.log(result.join("\n"));
}

function act(str) {
  const arr = str.split("");
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "{") stack.push("{");
    else if (arr[i] === "}" && stack.at(-1) === "{") stack.pop();
    else stack.push("}");
  }

  if (!stack.length) return 0;

  let cnt = 0;

  while (stack.length) {
    const a = stack.pop(),
      b = stack.pop();

    cnt += a !== b ? 2 : 1;
  }

  return cnt;
}

solution(input);
