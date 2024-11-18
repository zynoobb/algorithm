const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const n = +data.shift();

  const arr = Array.from({ length: n }, () => []);

  data.forEach((el, idx) => {
    const t = Math.floor(idx / 5);
    arr[t].push(el);
  });

  let min = Infinity,
    result = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const t = compare(arr[i], arr[j]);
      if (min > t) {
        min = t;
        result = [i + 1, j + 1];
      }
    }
  }

  console.log(result.join(" "));
}

function compare(a, b) {
  let cnt = 0;

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 7; j++) {
      if (a[i][j] !== b[i][j]) cnt++;
    }
  }

  return cnt;
}

solution(input);
