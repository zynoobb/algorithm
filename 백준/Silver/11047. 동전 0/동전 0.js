const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  let [N, total] = data.shift().split(" ").map(Number);

  const coinType = data.map(Number).reverse();

  let count = 0;

  for (let i = 0; i < N; i++) {
    count += parseInt(total / coinType[i]);
    total %= coinType[i];
  }

  console.log(count);
}

solution(input);
