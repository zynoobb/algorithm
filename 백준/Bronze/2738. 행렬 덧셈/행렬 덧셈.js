const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const temp = data.map((el) => el.split(" ").map(Number));
  const [n, m] = temp.shift();

  const result = temp.splice(0, n);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      result[i][j] += temp[i][j];
    }
  }

  console.log(result.map((el) => el.join(" ")).join("\n"));
}

solution(input);
