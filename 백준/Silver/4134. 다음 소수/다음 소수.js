const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [_, ...arr] = data.map(Number);

  const result = arr.map((el) => act(el));
  console.log(result.join("\n"));
}

function act(x) {
  if (x === 0 || x === 1) return 2;

  while (true) {
    if (!verifyPrime(x)) x++;
    else return x;
  }
}

function verifyPrime(x) {
  if (x === 0 || x === 1) return false;

  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }

  return true;
}

solution(input);
