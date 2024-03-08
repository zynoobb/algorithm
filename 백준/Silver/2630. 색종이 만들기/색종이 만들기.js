const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[N], ...matrix] = data.map((el) => el.split(" ").map(Number));
  const result = [0, 0];

  function recursive(x, y, n) {
    const d = Math.floor(n / 2);

    for (let i = y; i < y + n; i++) {
      for (let j = x; j < x + n; j++) {
        if (matrix[y][x] !== matrix[i][j]) {
          recursive(x, y, d);
          recursive(x, y + d, d);
          recursive(x + d, y, d);
          recursive(x + d, y + d, d);
          return;
        }
      }
    }

    !matrix[y][x] ? result[0]++ : result[1]++;
  }

  recursive(0, 0, N);

  console.log(result.join("\n"));
}

solution(input);
