const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const n = +data.shift();
  const testCase = [];
  for (let i = 0; i < data.length; i++) {
    const j = +data[i];
    testCase.push(data.slice(i + 1, i + j + 1));
    i += j;
  }

  const result = testCase.map((el) => act(el));
  console.log(result.join("\n"));
}

function act(cases) {
  const arr = cases.sort((a, b) => b.length - a.length);

  const table = {};

  for (let i = 0; i < arr.length; i++) {
    if (table[arr[i]]) return "NO";
    for (let j = arr[i].length; j > 0; j--) {
      const str = arr[i].slice(0, j);
      table[str] = true;
    }
  }

  return "YES";
}
solution(input);
