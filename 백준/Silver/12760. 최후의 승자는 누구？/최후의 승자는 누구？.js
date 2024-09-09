const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, m] = data.shift().split(" ").map(Number);

  const sorted = data.map((el) =>
    el
      .split(" ")
      .map(Number)
      .sort((a, b) => b - a)
  );

  const cards = Array.from({ length: m }, () => {
    return Array.from({ length: n }, () => null);
  });

  sorted.forEach((arr, i) => {
    arr.forEach((el, j) => (cards[j][i] = el));
  });

  const scores = Array.from({ length: n }, () => 0);

  cards.forEach((arr) => {
    arr.forEach((el, idx) => {
      if (el === Math.max(...arr)) scores[idx]++;
    });
  });

  const result = [];

  scores.forEach((el, idx) => {
    if (el === Math.max(...scores)) result.push(idx + 1);
  });

  console.log(result.join(" "));
}

solution(input);
