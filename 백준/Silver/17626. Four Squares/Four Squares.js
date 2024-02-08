const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  console.log(verify(+data[0]));
}

function verify(N) {
  if (Math.sqrt(N) === Math.floor(Math.sqrt(N))) return 1;

  for (let i = 1; i <= Math.sqrt(N); i++) {
    const temp = Math.sqrt(N - i ** 2);
    if (temp === Math.floor(temp)) return 2;
  }

  for (let i = 1; i <= Math.sqrt(N); i++) {
    for (let j = 1; j <= Math.sqrt(N - i ** 2); j++) {
      const temp = Math.sqrt(N - i ** 2 - j ** 2);
      if (temp === Math.floor(temp)) return 3;
    }
  }

  return 4;
}

solution(input);
