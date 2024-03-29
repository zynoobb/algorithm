const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[n, m], ...matrix] = data.map((el) => el.split(" ").map(Number));

  const points = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j]) points.push([i, j]);
    }
  }

  const [[x1, y1], [x2, y2]] = points;

  console.log(Math.abs(x1 - x2) + Math.abs(y1 - y2));
}

solution(input);
