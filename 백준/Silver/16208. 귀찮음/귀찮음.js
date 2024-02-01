const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [_, arr] = data.map((el) => el.split(" ").map(Number));

  let cnt = arr.reduce((ac, cur) => ac + cur);
  arr.sort((a, b) => a - b);

  let result = 0;
  arr.forEach((el) => {
    cnt -= el;
    result += cnt * el;
  });

  console.log(result);
}

solution(input);
