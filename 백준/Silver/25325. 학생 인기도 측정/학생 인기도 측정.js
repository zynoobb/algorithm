const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();

  const arr = data.map((el) => el.split(" "));
  const table = {};
  arr.shift().forEach((el) => (table[el] = 0));

  arr.forEach((el) => {
    el.forEach((t) => (table[t] = (table[t] | 0) + 1));
  });

  const sorted = Object.entries(table)
    .sort((a, b) => {
      if (a[1] !== b[1]) return b[1] - a[1];
      else return a[0].localeCompare(b[0]);
    })
    .map((el) => el.join(" "));

  console.log(sorted.join("\n"));
}

solution(input);
