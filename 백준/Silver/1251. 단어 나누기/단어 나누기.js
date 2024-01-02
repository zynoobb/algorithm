const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const str = data[0];
  const words = new Set();

  for (let i = 1; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      const a = str.slice(0, i).split("").reverse();
      const b = str.slice(i, j).split("").reverse();
      const c = str.slice(j).split("").reverse();
      const newWord = [...a, ...b, ...c].join("");
      words.add(newWord);
    }
  }

  const sorted = [...words].sort();
  console.log(sorted[0]);
}

solution(input);
