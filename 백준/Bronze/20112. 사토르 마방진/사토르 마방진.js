const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, ...arr] = data.map((el) => (isNaN(el) ? el : +el));

  let temp = Array.from({ length: n }, () => "");

  arr.forEach((el) => {
    el.split("").forEach((y, j) => (temp[j] += y));
  });

  const [hor, ver] = [arr, temp].map((el) => el.join(""));

  console.log(hor === ver ? "YES" : "NO");
}

solution(input);
