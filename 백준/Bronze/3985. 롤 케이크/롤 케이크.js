const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[N], [M], ...arr] = data.map((el) => el.split(" ").map(Number));

  const wanted = [0].concat(arr.map(([a, b]) => b - a));
  const maxWanted = Math.max(...wanted);
  console.log(wanted.indexOf(maxWanted));

  const units = Array.from({ length: N + 1 }, () => false);
  const having = Array.from({ length: M + 1 }, () => 0);

  arr.forEach(([a, b], idx) => {
    for (let j = a; j <= b; j++) {
      if (!units[j]) {
        having[idx + 1]++;
        units[j] = true;
      }
    }
  });

  const maxHaving = Math.max(...having);
  console.log(having.indexOf(maxHaving));
}

solution(input);
