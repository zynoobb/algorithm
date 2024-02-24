const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const testCase = [];
  for (let i = 2; i < data.length; i += 2) {
    testCase.push(data[i].split(" ").map(Number));
  }

  const result = testCase.map((el) => act(el));
  console.log(result.join("\n"));
}

function act(arr) {
  let max = 0;
  let cnt = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > max) max = arr[i];
    else cnt += max - arr[i];
  }

  return cnt;
}

solution(input);
