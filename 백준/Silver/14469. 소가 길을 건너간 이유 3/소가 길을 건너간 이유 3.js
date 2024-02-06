const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[N], ...arr] = data.map((el) => el.split(" ").map(Number));

  arr.sort((a, b) => a[0] - b[0]);

  let cnt = 0;
  arr.forEach(([a, b]) => {
    if (a > cnt) cnt = a + b;
    else cnt += b;
  });
  console.log(cnt);
}

solution(input);
