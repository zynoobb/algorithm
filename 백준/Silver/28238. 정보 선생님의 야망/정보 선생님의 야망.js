const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const n = +data.shift();

  const stu = data.map((el) => el.split(" ").map(Number));
  const table = {};

  for (let i = 0; i < 5; i++) {
    for (let j = i + 1; j < 5; j++) {
      let t = 0;
      for (let k = 0; k < n; k++) {
        if (stu[k][i] + stu[k][j] === 2) t++;
      }
      table[`${i}&${j}`] = t;
    }
  }
  const keys = Object.keys(table),
    values = Object.values(table);

  const max = Math.max(...values);
  const maxIdx = values.indexOf(max);

  const [a, b] = keys[maxIdx].split("&").map(Number);
  const result = [0, 0, 0, 0, 0];

  (result[a] = 1), (result[b] = 1);

  console.log(max);
  console.log(result.join(" "));
}

solution(input);
