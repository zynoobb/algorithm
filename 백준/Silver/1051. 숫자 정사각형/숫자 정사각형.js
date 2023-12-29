const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [Y, X] = data.shift().split(" ").map(Number);
  const arr = data.map((el) => el.split("").map(Number));
  let result = 0;

  for (let i = 0; i < Y; i++) {
    for (let j = 0; j < X; j++) {
      const limit = Math.min(Y - i, X - j);
      for (let k = 1; k < limit; k++) {
        const verify = [arr[i][j + k], arr[i + k][j], arr[i + k][j + k]].every(
          (el) => el == arr[i][j]
        );
        if (verify && k > result) {
          result = k;
        }
      }
    }
  }

  console.log((result + 1) ** 2);
}

solution(input);
