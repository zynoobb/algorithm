const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const str = data[0].split("").map(Number);

  for (let i = 1; i < str.length; i++) {
    const front = str.slice(0, i).reduce((acc, cur) => acc * cur, 1),
      back = str.slice(i).reduce((acc, cur) => acc * cur, 1);

    if (front === back) {
      console.log("YES");
      return;
    }
  }
  console.log("NO");
}

solution(input);
