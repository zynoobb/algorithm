const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();

  const cards = data.map((el) => el.split(" ").map((x) => (isNaN(x) ? x : +x)));

  const obj = {};

  cards.forEach(([a, b]) => {
    obj[a] = (obj[a] || 0) + b;
  });

  const keys = Object.keys(obj);

  let result = "NO";
  keys.forEach((el) => {
    if (obj[el] === 5) result = "YES";
  });

  console.log(result);
}

solution(input);
