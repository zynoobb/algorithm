const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [_, ...list] = data.map((el) => el.split(" ").map(Number));
  const result = list.map((el) => act(el));
  console.log(result.join("\n"));
}

function act(arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++)
      max = Math.max(max, getGCD(arr[i], arr[j]));
  }

  return max;
}

function getGCD(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }

  return a;
}

solution(input);
