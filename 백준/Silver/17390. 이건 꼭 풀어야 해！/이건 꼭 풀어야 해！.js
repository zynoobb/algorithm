const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[N, M], arr, ...testCase] = data.map((el) =>
    el.split(" ").map(Number)
  );

  arr.sort((a, b) => a - b);

  const table = {};
  table[0] = 0;

  arr.reduce((acc, cur, idx) => {
    table[idx + 1] = acc + cur;
    return acc + cur;
  }, 0);

  const result = testCase.map(([a, b]) => {
    return table[b] - table[a - 1];
  });

  console.log(result.join("\n"));
}

solution(input);
