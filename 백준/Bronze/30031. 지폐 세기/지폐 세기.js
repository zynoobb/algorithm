const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[N], ...arr] = data.map((el) => el.split(" ").map(Number));

  const table = {
    136: 1000,
    142: 5000,
    148: 10000,
    154: 50000,
  };

  const result = arr.reduce((acc, cur) => {
    return acc + table[cur[0]];
  }, 0);

  console.log(result);
}

solution(input);
