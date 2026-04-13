const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.pop();
  const maxNum = Math.max(...data.map(Number));

  const arr = Array.from({ length: maxNum + 1 }, (_, i) => i);
  for (let i = 1; i < arr.length; i++) arr[i] += arr[i - 1];

  const result = data.map((el) => arr[Number(el)]);
  console.log(result.join("\n"));
}

solution(input);
