const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const str = data[0].split("");

  const obj = {};
  str.forEach((el) => (obj[el] = (obj[el] || 0) + 1));

  let oddCnt = 0;
  Object.values(obj).forEach((el) => {
    if (el % 2 !== 0) oddCnt++;
  });

  console.log(Math.max(0, oddCnt - 1));
}

solution(input);
