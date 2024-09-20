const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[n, m], ...matrix] = data.map((el) => el.split(" ").map(Number));
  const [h] = matrix.pop();

  for (let i = 1; i < n; i++) {
    matrix[i][0] += matrix[i - 1][0];
  }
  for (let i = 1; i < m; i++) {
    matrix[0][i] += matrix[0][i - 1];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      matrix[i][j] += Math.min(matrix[i - 1][j], matrix[i][j - 1]);
    }
  }

  const result = matrix[n - 1][m - 1];
  console.log(result > h ? "NO" : `YES\n${result}`);
}

solution(input);
