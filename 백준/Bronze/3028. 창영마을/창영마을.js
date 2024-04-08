const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const orders = data[0].split("");
  let [a, b, c] = [1, 0, 0];

  const table = {
    A: () => {
      const t = a;
      a = b;
      b = t;
    },
    B: () => {
      const t = b;
      b = c;
      c = t;
    },
    C: () => {
      const t = c;
      c = a;
      a = t;
    },
  };
  orders.forEach((el) => table[el]());

  console.log([a, b, c].indexOf(1) + 1);
}

solution(input);
