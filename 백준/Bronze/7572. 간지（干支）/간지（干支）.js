const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data[0] % 60;

  const table = {};

  const gan = "0123456789";
  const ez = "ABCDEFGHIJKL";

  for (let i = 0; i < 60; i++) {
    const txt = ez[i % 12] + gan[i % 10];
    table[i] = txt;
  }

  const K = N - 4 >= 0 ? N - 4 : N + 56;
  console.log(table[K]);
}

solution(input);
