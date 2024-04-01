const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.pop();

  const result = data.map((el) => act(el));
  console.log(result.join("\n"));
}

function act(str) {
  const table = {};
  const arr = str.split(" ").map(Number);
  arr.pop();

  arr.forEach((el) => (table[el] = true));

  let cnt = 0;

  arr.forEach((el) => {
    if (table[el * 2]) cnt++;
  });

  return cnt;
}

solution(input);
