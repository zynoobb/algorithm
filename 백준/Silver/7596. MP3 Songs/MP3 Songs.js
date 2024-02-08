const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const testCase = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "0") break;
    if (!isNaN(data[i])) testCase.push(data.slice(i + 1, i + +data[i] + 1));
  }

  const result = testCase.map((el, idx) => act(el, idx)).flat();
  console.log(result.join("\n"));
}

function act(arr, idx) {
  arr.sort();
  arr.unshift(idx + 1);

  return arr;
}

solution(input);
