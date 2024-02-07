const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const arr = data[0].split("-");

  const numList = [];
  for (let str of arr) {
    const temp = str.split("+").reduce((acc, cur) => acc + +cur, 0);
    numList.push(temp);
  }

  let result = numList[0];
  for (let i = 1; i < numList.length; i++) {
    result -= numList[i];
  }

  console.log(result);
}

solution(input);
