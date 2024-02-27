const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();

  const testCase = [];
  for (let i = 0; i < data.length; i++) {
    if (!isNaN(data[i])) {
      testCase.push(data.slice(i + 1, +data[i] + i + 1));
    }
  }

  const result = testCase.map((el) => act(el));
  console.log(result.join("\n"));
}

function act(arr) {
  let cnt = 0;

  arr.forEach((el) => {
    const splited = el.split(" ").map(Number);
    const max = Math.max(...splited);
    if (max > 0) cnt += max;
  });

  return cnt;
}

solution(input);
