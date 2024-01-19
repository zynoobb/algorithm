const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data[0];

  let left = 1,
    right = 1;

  const result = [];
  while (true) {
    const dif = right ** 2 - left ** 2;

    if (dif > N && right - left === 1) break;
    if (dif == N) result.push(right);

    if (dif > N) left++;
    else right++;
  }

  console.log(result.length ? result.join("\n") : -1);
}

solution(input);
