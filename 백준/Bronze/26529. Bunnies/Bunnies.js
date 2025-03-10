const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const num = data.map(Number);
  num.shift();

  const dp = (n) => {
    const arr = Array.from({ length: n + 1 }, () => 1);
    for (let i = 2; i <= n; i++) arr[i] = arr[i - 1] + arr[i - 2];
    return arr.at(-1);
  };

  console.log(num.map((el) => dp(el)).join("\n"));
}

solution(input);


