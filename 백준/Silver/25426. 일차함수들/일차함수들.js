const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data.shift();

  const arr = [[], []];

  data.forEach((el) => {
    const [a, b] = el.split(" ").map(Number);
    arr[0].push(a), arr[1].push(b);
  });

  arr.forEach((el) => el.sort((a, b) => a - b));

  let result = 0;
  const [lst1, lst2] = arr;
  for (let i = 0; i < N; i++) {
    result += lst1[i] * (i + 1) + lst2[i];
  }

  console.log(result);
}

solution(input);
