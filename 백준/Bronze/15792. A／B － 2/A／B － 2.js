const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, m] = data[0].split(" ").map(Number);

  const a = String(Math.floor(n / m));
  let b = "";
  let result = 0;
  let last = String(Math.floor(n % m));

  let cnt = 0;
  while (1001 > cnt) {
    const rest = (last % m) * 10;
    b += Math.floor(last / m);
    last = rest;

    if (!last) break;
    cnt++;
  }

  console.log(a + "." + b.slice(1));
}

solution(input);
