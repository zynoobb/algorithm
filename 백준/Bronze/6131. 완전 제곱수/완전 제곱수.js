const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data[0];

  let result = 0;

  for (let i = 1; i <= 500; i++) {
    for (let j = 2; j <= 500; j++) {
      const K = j ** 2 - i ** 2;

      if (K === N) result++;
      else if (K > N) break;
    }
  }

  console.log(result);
}

solution(input);
