const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const table = {};
  let total = data.length;
  data.forEach((el) => {
    table[el] = (table[el] || 0) + 1;
  });

  const entry = Object.entries(table);

  const result = [];

  for (let v of entry) {
    const per = ((v[1] * 100) / total).toFixed(4);
    result.push(`${v[0]} ${per}`);
  }

  console.log(result.sort().join("\n"));
}

solution(input);
