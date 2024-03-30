const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[n, m], ...matrix] = data.map((el) => el.split(" ").map(Number));

  const result = [];

  for (let i = 0; i < n; i++) {
    const temp = [];
    for (let j = 0; j < m * 3; j += 3) {
      const [r, g, b] = [matrix[i][j], matrix[i][j + 1], matrix[i][j + 2]];

      const asc = 2126 * r + 7152 * g + 722 * b;
      temp.push(String.fromCharCode(transChar(asc)));
    }
    result.push(temp);
  }

  console.log(result.map((el) => el.join("")).join("\n"));
}

function transChar(n) {
  if (n >= 2040000) return 46;
  else if (n >= 1530000) return 45;
  else if (n >= 1020000) return 43;
  else if (n >= 510000) return 111;
  else return 35;
}

solution(input);
