const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();

  const set = new Set();
  data.forEach((el) => {
    const [a, b] = el.split(" ").map(Number);
    for (let i = a; i < b; i++) {
      set.add(i);
    }
  });

  console.log(set.size);
}

solution(input);
