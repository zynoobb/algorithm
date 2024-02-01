const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data.shift();

  const matrix = data.map((el) => el.split(" ").map(Number));

  const checked = Array.from({ length: N }, () => {
    return Array.from({ length: N }, () => false);
  });

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (checked[i][j]) continue;
      const a = matrix[i],
        b = matrix[j];

      for (let k = 0; k < 5; k++) {
        if (a[k] === b[k]) {
          checked[i][j] = true;
          checked[j][i] = true;
          break;
        }
      }
    }
  }

  const counted = checked.map((el) => el.filter((k) => k).length);
  const max = Math.max(...counted);
  console.log(counted.indexOf(max) + 1);
}

solution(input);
