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
  const [a, b] = str.split(" ");
  const arr = [0, 0];

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) a[i] === "0" ? arr[0]++ : arr[1]++;
  }

  return Math.max(...arr);
}

solution(input);
