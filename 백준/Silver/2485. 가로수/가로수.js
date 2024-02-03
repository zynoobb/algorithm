const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [N, ...arr] = data.map(Number);

  const set = new Set();
  for (let i = 0; i < N - 1; i++) {
    set.add(arr[i + 1] - arr[i]);
  }

  const gapList = [...set];

  const reduceGCD = gapList.reduce((acc, cur) => {
    return getGCD(acc, cur);
  }, gapList[0]);

  const diff = arr.at(-1) - arr[0];
  console.log(diff / reduceGCD - N + 1);
}

function getGCD(a, b) {
  let x = a > b ? a : b;
  let y = a > b ? b : a;

  while (y) {
    [x, y] = [y, x % y];
  }
  return x;
}

solution(input);
